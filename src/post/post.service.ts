import { API_BASE_URL } from '../app/app.config';
import { Post } from './show/post-show.store';

/**
 * 处理内容文件
 */
export const postFileProcess = (post: Post) => {
  let { file } = post;

  if (file) {
    const { id: fileId } = file;
    const fileBaseUrl = `${API_BASE_URL}/files/${fileId}/serve`;

    file = {
      ...file,
    };

    post = {
      ...post,
      file,
    };
  }

  return post;
};
