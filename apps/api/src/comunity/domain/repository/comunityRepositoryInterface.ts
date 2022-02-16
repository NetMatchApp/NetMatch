import { Comunity } from "../model/comunity";

export interface ComunityRepositoryInterface {

    saveComunity(comunity: Comunity): Promise<void>

}