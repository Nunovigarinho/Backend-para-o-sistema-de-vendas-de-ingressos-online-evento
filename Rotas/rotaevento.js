//micro aplicação HTTP oferecida pelo express
import { Router } from "express";
import EventoCtrl from "../controle/eventoCtrl.js";

const rotaevento = Router();
const ctrlevento = new EventoCtrl();

rotaevento.get("/", ctrlevento.consultar)
.get("/:termoBusca", ctrlevento.consultar)
.post("/", ctrlevento.gravar)
.put("/", ctrlevento.alterar)
.delete("/", ctrlevento.excluir);

export default rotaevento;