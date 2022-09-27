const imports = Object.entries(import.meta.globEager("./posts/*.md"));
const posts = [];

let prefix = "blog/";

for (const post of imports) {
    if (post) {
        let url = prefix.concat(post[0].slice(8, -3));
        posts.push([post[1].metadata, url]);
    }
}

const sortedPosts = posts.sort((a, b) => {
    let c = a[0].date.split('-');
    let d = b[0].date.split('-');
    return new Date(c[0], c[1], c[2], c[3], c[4]) > new Date(d[0], d[1], d[2], d[3], d[4]) ? -1 : 1;
});
export default sortedPosts;