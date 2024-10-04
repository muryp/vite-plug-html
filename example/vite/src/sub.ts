export default function () {
  const isComplete = true
  const isCheck = isComplete ? 'checked="checked"' : ''
  return html`
    <div>
      isChecked :
      <input name="isComplete" type="checkbox" class="toggle" ${isCheck} />
    </div>
  `
}