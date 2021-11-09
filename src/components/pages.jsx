import React from "react"
import { Switch, Route } from "react-router-dom";
import { Inicio } from "./inicio/cartWidget";
import { ProductosLista } from "./products/itemList"

export const Paginas = () => {
    return (
        <section>
            <Switch>
                <Route path="/" exact component={Inicio}/>
                <Route path="/products" exact component={ProductosLista}/>
            </Switch>
        </section>
    )
}