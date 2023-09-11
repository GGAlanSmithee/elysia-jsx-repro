import * as ElysiaJSX from "elysia"
import html from "@elysiajs/html"
import Elysia from "elysia"

const A = () => <div>A</div>

const B = ({ content }: { content?: JSX.Element | null }) => (
    <div>{content}</div>
)

const C = () => (
    <div>
        <B />
        <B content={true ? <A /> : <span>test</span>} />
    </div>
)

const app = new Elysia().use(html()).get("/", () => C)

app.listen(5000, ({ hostname, port }) => console.log(`\nhttp://${hostname}:${port}`))
