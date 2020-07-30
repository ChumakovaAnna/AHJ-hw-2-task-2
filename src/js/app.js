import TableController from "./TableController";
import getJson from "./getJson";
import Filters from "./Filters";
import ChangeTable from "./ChangeTable";

console.log("it works!");

const json = getJson();
const table = new TableController();
table.bindToDOM(document.querySelector(".container"));

const filters = new Filters(json);
const changeTable = new ChangeTable(table, filters);
changeTable.changingTable();
