import { MasterData } from "./../models/model";
import * as mock from "src/mocks/masterdata";

let DataAccess = {
  getData: (): MasterData[] => {
    return mock.mockMasterDataList();
  },
};

export default DataAccess;
