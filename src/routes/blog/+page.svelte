<script>
    import PostCard from "../../components/post-card.svelte";
    import sortedPosts from "./posts.js";
    let dates = [];
    for (const post of sortedPosts) {
        dates.push(post[0].date.split("T")[0]);
    }
</script>

{#each sortedPosts as post, i}
    <div class="post"><PostCard title={post[0].title} author={post[0].author} date={dates[i]} para={post[0].para} url={post[1]} /></div>
{/each}

<style>
    .post {
        border-radius: 10px;
        border: 2px solid var(--cream);
        padding: 20px;
        margin: 10px;
        transition: all 0.5s ease-in-out;
    }

    .post:hover {
        background-color: #aaaaaa30;
    }
</style>