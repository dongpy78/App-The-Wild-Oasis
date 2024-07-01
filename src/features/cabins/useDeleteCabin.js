import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  // useMutation giúp thực hiện các thao tác thay đổi dữ liệu (mutation) và theo dõi trạng thái
  // của những thao tác này (ví dụ: đang xử lý, thành công, thất bại).
  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,

    onSuccess: () => {
      toast.success("Cabin successfully deleted");
      // Cập nhật vào queryClient để dữ liệu khi xóa cập nhật ngay không phải reload lại lần nữa
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };
}
