import { createAction } from "@reduxjs/toolkit";

export const ordersRequest = createAction("orders/request");
export const ordersSuccess = createAction("orders/success");
export const ordersError = createAction("orders/error");