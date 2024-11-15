import sub from './sub'

const hello: string = html` <p>hello world!</p> `
const Search = 'hello tiga.html'

function main(listTodo: string) {
  return html`
    ${Search}
    <div id="content">${listTodo}</div>
    <div class="flex justify-center">
      ${sub()}
      <button
        type="btn"
        id="loadmore"
        class="btn btn-primary w-1/3 cursor-pointer">
        load more
      </button>
      <a href="/hello.html">hello</a>
    </div>
  `
}
document.getElementById('app')!.innerHTML = hello + main('ini argument')
