/**
 * Класс для изменения таблицы по интервалу
 */
export default class ChangeTable {
  /**
   * @param  {} TableController - класс для прорисовки игрового поля
   * @param  {} Filters - класс для видов фильтрации Json
   */
  constructor(TableController, Filters) {
    this.table = TableController;
    this.filters = Filters;
    this.json = null;
  }

  /**
   * Метод для изменения порядка в  таблицы в каждом столбце по интервалу
   */
  changingTable() {
    console.log("Сортировка по id");
    this.json = this.filters.sortById();
    this.table.getData(this.json);
    this.table.drawUi();
    this.table.drawArrow("id");

    setTimeout(() => {
      console.log("Сортировка по title");
      this.json = this.filters.sortByTitle();
      this.table.getData(this.json);
      this.table.drawUi();
      this.table.drawArrow("title");
    }, 5000);

    setTimeout(() => {
      console.log("Сортировка по year");
      this.json = this.filters.sortByYear();
      this.table.getData(this.json);
      this.table.drawUi();
      this.table.drawArrow("year");
    }, 10000);

    setTimeout(() => {
      console.log("Сортировка по imdb");
      this.json = this.filters.sortByImdb();
      this.table.getData(this.json);
      this.table.drawUi();
      this.table.drawArrow("imdb");
    }, 15000);
  }
}
