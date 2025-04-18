import { ApiResponse, Blog, Title } from "@/types/api/microcms";
import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.MICROCMS_DOMAIN ?? "", // microCMSのサービスドメイン
  apiKey: process.env.MICROCMS_API_KEY ?? "", // .envファイルにAPIキーを保存
});

export const fetchTitle = async (): Promise<ApiResponse<Title>> => {
  return client.getList<Title>({ endpoint: "test" });
};

export const fetchBlogList = async (): Promise<ApiResponse<Blog>> => {
  return client.getList<Blog>({ endpoint: "blogs" });
};

export const fetchBlogDetail = async (id: string): Promise<Blog> => {
  return client.getListDetail({ endpoint: "blogs", contentId: id });
};
