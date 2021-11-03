import { ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import { map, mergeMap, debounceTime, catchError } from "rxjs/operators";
import {
  FETCH_SERVICES_REQUEST,
  GET_SERVICE_REQUEST,
} from "../actions/actionTypes";
import {
  fetchServicesSuccess,
  fetchServicesFailure,
  getServiceSuccess,
  getServiceFailure,
} from "../actions/actionCreators";
import { of } from "rxjs";

export const fetchServicesEpic = (action$) => action$.pipe(
    ofType(FETCH_SERVICES_REQUEST),
    debounceTime(100),
    mergeMap(() => 
        ajax.getJSON(`${process.env.REACT_APP_API_URL}`)
        .pipe(
            map((o) => fetchServicesSuccess(o)),
            catchError((e) => of(fetchServicesFailure(e)))
        )
    )
);

export const getServiceEpic = action$ => action$.pipe(
    ofType(GET_SERVICE_REQUEST),
    map(o => o.payload.id),
    debounceTime(100),
    mergeMap((o) => 
        ajax.getJSON(`${process.env.REACT_APP_API_URL}/${o}`).pipe(
            map((o) => getServiceSuccess(o)),
            catchError((e) => of(getServiceFailure(e)))
        )
    )
);

