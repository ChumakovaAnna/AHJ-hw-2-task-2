/**
 * Класс для прорисовки с игровым полем
 */
export default class TableController {
  constructor() {
    this.container = null;
    this.data = null;
    this.tableList = null;
    this.arrow = "&#129047;";
    this.allArrows = null;
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
    this.findAllArrows();

    this.container.innerHTML = `
    <div class="grid-noGutter" data-id="list"></div>
    `;
    this.tableList = this.container.querySelector("[data-id=list]");
    this.drawCells();
    this.eraseArrows();
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
  getData(json) {
    this.data = json;
  }

  /**
   * Прорисовывает все ячейки в таблице
   * В ячейке с индексом Imdb фиксируем 2 знака, после запятой
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
        const text = ele.imdb.toFixed(2);
        this.drawOneCell(2, text);
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

  /**
   * Метод для прорисовки стрелки
   */
  drawArrow(topic) {
    const headerCell = document.querySelector(`[data-arrow=${topic}]`);
    headerCell.innerHTML = this.arrow;
  }

  /**
   * Метод, чтобы удалить стрелку
   */
  eraseArrows() {
    this.allArrows.forEach((e) => {
      e.innerHTML = "";
    });
  }

  /**
   * Метод для получения всех стрелок в таблице
   */
  findAllArrows() {
    this.allArrows = document.querySelectorAll(".arrow");
  }
}
