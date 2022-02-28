const numTable = 5;
let TableList = [];

for(let i = 0; i < numTable; ++i){
    TableList = [...TableList, "Bàn " + (i + 1)]
}
export const UintTable = TableList;