declare enum WebsiteKeys {
    TWITTER = "twitter",
    PIXIV = "pixiv",
    MELONBOOKS = "melonbooks",
    TORANOANA = "toranoana"
}
declare type RegularExpressions = {
    [T in WebsiteKeys]: RegExp;
};
interface Query {
    [key: string]: string;
}
declare function parseQuery(text: string): Query;
declare function stringifyQuery(query: Query): string;
declare function processQuery(key: WebsiteKeys, text: string): string | undefined;
declare function getSanitizedURL(key: WebsiteKeys, match: RegExpMatchArray): string;
declare const regularExpressions: RegularExpressions;
