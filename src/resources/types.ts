/**
 * HTMLマークアップを含む文字列を表すブランドタイプ
 * 通常のstringとは区別され、HTMLとして意図された文字列のみを受け入れる
 */
export type HTML = string & { readonly __brand: 'HTML' }

/**
 * 文字列をHTML型に変換するヘルパー関数
 * @param value - HTML文字列
 * @returns HTML型の文字列
 */
export const html = (value: string): HTML => value as HTML
