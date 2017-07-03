#
nâng cấp angular 1 lên 2 dùng ngUpgarde, Angular Router
#


## How to Run


- `npm install`
- `npm start`
- open `localhost:8080`

- optionally `npm run build` to build bundle

## Applicaiton

### Modules

#  main.ts 
! viết = angular 1
! import 2 thư module ng1_app.ts để quản lý angular1; ng2_app.ts quản lý angular2
! bootstrap angular 2 trc, sau đó bootstrap angular 1
!



### Routes

These are the routes the application supports:

* /
* /messages/:folder
* /messages/:folder/:id
* /settings
* /settings/pagesize

The first three routes are handled by the Angular 1 router, and the last two are handled by the Angular 2 router. We define a custom UrlHandlingStrategy to partition all URLs into these two sets.


### Wiring it Up

See comments in `ng2_app.ts` and `main.ts`.
