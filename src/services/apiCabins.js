import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loader");
  }
  return data;
}

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
