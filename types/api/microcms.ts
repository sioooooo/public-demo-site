export type Title = {
  id: string; // microCMSの自動生成フィールド
  createdAt: string; // 作成日時
  updatedAt: string; // 更新日時
  publishedAt: string; // 公開日時
  revisedAt: string; // 改訂日時
  title: string; // タイトル
};

export type Blog = {
  id: string; // microCMSの自動生成フィールド
  createdAt: string; // 作成日時
  updatedAt: string; // 更新日時
  publishedAt: string; // 公開日時
  revisedAt: string; // 改訂日時
  title: string; // タイトル
  content: string;
  eyecatch?: {
    url: string;
    height: number;
    width: number;
  };
  category: {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    name: string;
  };
};

export type ApiResponse<T> = {
  contents: T[]; // コンテンツリスト
  totalCount: number; // 総コンテンツ数
  offset: number; // オフセット
  limit: number; // リミット
};
