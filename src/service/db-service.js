import { enablePromise, openDatabase } from "react-native-sqlite-storage";

const tableName = "recordData";

enablePromise(true);

export const getDBConnection = async () => {
	return openDatabase({ name: "expensex-data.db", location: "default" });
};

export const createTable = async (db) => {
	// create table if not exists
	const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
          value TEXT NOT NULL
      );`;

	await db.executeSql(query);
};

// @return Promise<RecordItem[]>
export const getRecordItems = async (db) => {
	try {
		const recordItems = [];
		const results = await db.executeSql(
			`SELECT rowid as id,value FROM ${tableName}`
		);
		results.forEach((result) => {
			for (let index = 0; index < result.rows.length; index++) {
				recordItems.push(result.rows.item(index));
			}
		});
		return recordItems;
	} catch (error) {
		console.error(error);
		throw Error("Failed to get recordItems !!!");
	}
};

// @param recordItems: RecordItem[]
export const saveRecordItems = async (db, recordItems) => {
	const insertQuery =
		`INSERT OR REPLACE INTO ${tableName}(rowid, value) values` +
		recordItems.map((i) => `(${i.id}, '${i.value}')`).join(",");

	return db.executeSql(insertQuery);
};

// @param id: number
export const deleteTodoItem = async (db, id) => {
	const deleteQuery = `DELETE from ${tableName} where rowid = ${id}`;
	await db.executeSql(deleteQuery);
};

export const deleteTable = async (db) => {
	const query = `drop table ${tableName}`;

	await db.executeSql(query);
};
