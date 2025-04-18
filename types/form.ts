import { z } from "zod";

export const registrationSchema = z.object({
  name: z.string().min(1, "名前は必須です"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  password: z.string().min(6, "パスワードは6文字以上必要です"),
});

export type RegistrationFormData = z.infer<typeof registrationSchema>;
