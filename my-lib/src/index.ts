import { marked } from 'marked';

export function useMarked() {
  return marked.parse('# hi');
}
