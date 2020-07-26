import getJson from "./getJson";

/**
 * Класс для работы с игровым полем
 */
export default class TableController {
  constructor() {
    this.container = null;
    this.data = null;
    this.tableList = null;
  }

  /**
   * Проверяет, является ли container HTML-элемент
   * @param  {} container
   */
  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error("container is not HTMLElement");
    }
    this.container = container;
  }

  /**
   * Прорисовывает рабочее поле
   */
  drawUi() {
    this.checkBinding();
    this.getData();

    this.container.innerHTML = `
    <div class="grid-noGutter" data-id="list"></div>
    `;
    this.tableList = this.container.querySelector("[data-id=list]");
    this.drawCells();
  }

  /**
   * Проверяет если container равен null
   */
  checkBinding() {
    if (this.container === null) {
      throw new Error("GamePlay not bind to DOM");
    }
  }

  /**
   * Метод для получения json
   */
  getData() {
    this.data = getJson();
  }

  /**
 * Прорисовывает все ячейки в таблице
 */
  drawCells() {
    this.data.forEach((ele) => {
      if (ele.id) {
        this.drawOneCell(2, ele.id);
      }
      if (ele.title) {
        this.drawOneCell(6, ele.title);
      }
      if (ele.year) {
        this.drawOneCell(2, ele.year);
      }
      if (ele.imdb) {
        this.drawOneCell(2, ele.imdb);
      }
    });
  }

  /**
   * Прорисовывает одну ячейку из таблицы
   * @param  {number} number - размер ячейки по системе gridlex
   * @param  {any} text - текст самой ячейки
   */
  drawOneCell(number, text) {
    const cellEl = document.createElement("div");
    cellEl.classList.add(`col-${number}`);
    cellEl.innerHTML = `
      <div class="cell">
        ${text}
      </div>`;
    this.tableList.insertAdjacentElement("beforeend", cellEl);
  }
}
