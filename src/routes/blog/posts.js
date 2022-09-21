const imports = Object.entries(import.meta.globEager("./posts/*.md"));
const posts = [];

let prefix = "blog/";

for (const post of imports) {
    if (post) {
        let url = prefix.concat(post[0].slice(8, -3));
        posts.push([post[1].metadata, url]);
    }
}

const sortedPosts = posts.sort((a, b) => new Date(a.date) < new Date(b.date) ? -1 : 1);
export default sortedPosts;