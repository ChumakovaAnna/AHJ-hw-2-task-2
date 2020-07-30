/**
 * Класс для видов фильтрации Json
 */
export default class Filters {
  constructor(json) {
    this.json = json;
  }

  /**
   * Фильтр по Id
   */
  sortById() {
    const jsonId = this.json.slice().sort((a, b) => a.id - b.id);
    return jsonId;
  }

  /**
   * Фильтр по Title
   */
  sortByTitle() {
    const jsonTitle = this.json.slice().sort((a, b) => (a.title > b.title ? 1 : -1));
    return jsonTitle;
  }
  /**
   * Фильтр по Year
   */

  sortByYear() {
    const jsonYear = this.json.slice().sort((a, b) => a.year - b.year);
    return jsonYear;
  }

  /**
   * Фильтр по Imdb
   */
  sortByImdb() {
    const jsonImdb = this.json.slice().sort((a, b) => a.imdb - b.imdb);
    return jsonImdb;
  }
}
