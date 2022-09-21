<script>
    export let title;
    export let para;
    export let author;
    export let date;
    export let url;
    let dateArray = date.split("-");
    let day = dateArray[0].concat('.', dateArray[1], '.', dateArray[2]);
    let time = dateArray[3].concat(':', dateArray[4], " UTC");
</script>

<a href={url}>
    <article>
        <h1>{title} <h5>by {author} on {day} at {time}<p>{para}</h1>
    </article>
</a>

<style>
    a {
        text-decoration: none;
    }
</style>