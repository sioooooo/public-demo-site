"use client";

import { client } from "@/lib/microcms-client";
import { RegistrationFormData, registrationSchema } from "@/types/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = async (data: RegistrationFormData) => {
    try {
      // microCMSにデータを送信
      //   await client.create({
      //     endpoint: "members",
      //     content: {
      //       name: data.name,
      //       email: data.email,
      //       password: data.password, // 暗号化する場合はここで処理
      //     },
      //   });
      alert("会員登録が完了しました！");
    } catch (error) {
      console.error("登録エラー:", error);
      alert("エラーが発生しました。もう一度お試しください。");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block font-bold">
          名前
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className="border border-gray-300 rounded p-2 w-full"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block font-bold">
          メールアドレス
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="border border-gray-300 rounded p-2 w-full"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block font-bold">
          パスワード
        </label>
        <input
          id="password"
          type="password"
          {...register("password")}
          className="border border-gray-300 rounded p-2 w-full"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        登録
      </button>
    </form>
  );
};
