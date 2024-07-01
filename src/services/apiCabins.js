import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loader");
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  // console.log(newCabin, id);

  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl); // lỗi chỗ này vì "start" viết thiếu chữ "s" ở sau

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  // https://xkgrgawixzhyxyeiqxwl.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
  // 1. Create/edit cabin
  let query = supabase.from("cabins");
  // A) CREATE
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // b) EDIT
  if (id)
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select();

  const { data, error } = await query.select().single();
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be created");
  }

  // 2. Upload image
  // const avatarFile = event.target.files[0];
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3. Delete the cabin IF there was an error uploading image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin image could not be upload and the cabin was not created "
    );
  }
  return data;
}

// export async function editCabin(newCabin) {
//   const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
//     "/",
//     ""
//   );

//   const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
//   // https://xkgrgawixzhyxyeiqxwl.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
//   // 1. Create cabin
//   const { data, error } = await supabase
//     .from("cabins")
//     .insert([{ ...newCabin, image: imagePath }])
//     .select()
//     .single();

//   if (error) {
//     console.error(error);
//     throw new Error("Cabins could not be created");
//   }

//   // 2. Upload image
//   // const avatarFile = event.target.files[0];
//   const { error: storageError } = await supabase.storage
//     .from("cabin-images")
//     .upload(imageName, newCabin.image);

//   // 3. Delete the cabin IF there was an error uploading image
//   if (storageError) {
//     await supabase.from("cabins").delete().eq("id", data.id);
//     console.error(storageError);
//     throw new Error(
//       "Cabin image could not be upload and the cabin was not created "
//     );
//   }
//   return data;
// }

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }
  return data;
}

/* 
Từ ứng dụng client supabase chúng ta có thể tạo truy vấn bằng phương thức from
và sau đó chúng ta chỉ định tên của bảng và sau đó là các trường mà chúng ta muốn.
Và vì vậy điều này trả lại 1 lời hứa mà chúng ta đang chờ đợi. Và kết quả của việc 
đó cung cấp cho chúng ta dữ liệu và lỗi có thể xảy ra.
Vì vậy nếu không có lỗi thì chúng ta chỉ cần trả về dữ liệu đó. 



*/
