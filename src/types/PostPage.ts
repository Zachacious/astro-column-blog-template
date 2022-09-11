import type { Page } from 'astro';
import type { MarkdownInstance } from 'astro-boilerplate-components';

import type { PostFrontmatter } from './PostFrontmatter';

type PostPage = Page<MarkdownInstance<PostFrontmatter>>;

export type { PostPage };
