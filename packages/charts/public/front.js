    display: flex;
    align-items: center;
`,b=d["f"]`
    color: ${d.e.WHITE} !important;
    margin: 0 12px;
`(l.a),v=d["f"]`
    color: ${d.e.WHITE};
    font-size: 20px;
    font-weight: 500;
`(d.b.FontFamily(u.a)),y=d["f"]`
    color: ${d.e.WHITE};
    margin-right: 16px;

    &:hover {
        cursor: pointer;
    }
`(d.c.Search),g=d["f"]`
    color: ${d.e.WHITE};
    margin-right: 24px;

    &:hover {
        cursor: pointer;
    }
`(d.c.Notification),k=Object(i["a"])(u["a"])`
    height: 32px;
    width: 32px;
    border-radius: 50%;
    background-color: ${d.e.PRIMARY};
`,j=d["f"]`
    color: ${d.e.WHITE};
    font-size: 14px;
    font-weight: 500;
    margin: 0 12px 0 16px;

    &:hover {
        cursor: pointer;
    }
`(d.b.FontFamily(u.a)),x=Object(i["a"])(u["a"])`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;

    width: 100%;
    height: ${f.a}px;
    background-color: #37474f;
    box-shadow:
        0 4px 5px 0 rgba(0, 0, 0, 0.14),
        0 1px 10px 0 rgba(0, 0, 0, 0.12),
        0 2px 4px -1px rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: space-between;
    align-items: center;
`,w=d["f"]`
    color: ${d.e.WHITE};
    margin-right: 24px;

    &:hover {
        cursor: pointer;
    }
`(d.c.ArrowDown);a.a=Object(s.b)(e=>({credentials:e.credentials,user:e.credentials.userId?Object(c.sel)(c.USER).byKey(e.credentials.userId)(e):void 0}))(e=>n.createElement(x,Object.assign({},h(e)),n.createElement(_,null,n.createElement(b,{onClick:e.onMenuClick},n.createElement(d.c.Hamburger,null)),n.createElement(v,null,e.appLabel)),n.createElement(_,null,n.createElement(y,{onClick:e.onSearchClick}),n.createElement(g,{onClick:()=>e.user&&Object(p.c)(Object(r.c)(m.a.app.access.user.get(e.user)))}),n.createElement(k,null),n.createElement(j,{onClick:()=>e.user&&Object(p.c)(Object(r.c)(m.a.app.access.user.get(e.user)))},e.user&&e.user.lastName),n.createElement(w,{onClick:()=>Object(p.c)(Object(r.d)("/auth"))}))))},"./src/badges/BadgeExtended.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/badges/elements.tsx")),r=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)a.indexOf(n[o])<0&&(t[n[o]]=e[n[o]])}return t};a.a=(e=>{var{role:a,editable:t,onChange:s}=e,i=r(e,["role","editable","onChange"]);return n.createElement(o.d,Object.assign({key:a.roleId,color:a.color,disabled:!t},i),n.createElement(o.c,null,a.name),t&&n.createElement(o.e,{onClick:()=>s(a.roleId)}))})},"./src/badges/CreatingBadge.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/material-ui/Menu/index.js")),r=t.n(o),s=t("./src/layout/MenuItem.tsx"),i=t("./src/badges/elements.tsx"),l=t("./src/smart/Pure.ts"),d=t("./src/smart/Toggle.tsx");const u={onChange:Object(l.b)("onChange")},c=Object(l.a)().concat(d.a).addMsg(u).addReducer((e,a)=>"onChange"===a.type?Object.assign({},e,{values:a.payload}):e);a.a=(e=>n.createElement(c,{values:e.values,roles:e.roles,onChange:e.onChange},({makeRef:e,pureRefs:a,values:t,roles:o,onToggle:l,on:d,onChange:u})=>n.createElement(i.a,{onClick:()=>l(!0),ref:e("badge")},n.createElement(i.c,null,"Добавить роль"),n.createElement(i.b,null),n.createElement(r.a,{open:d,anchorEl:a.badge},Object.keys(o).map(e=>o[e]).filter(e=>!t.includes(e.roleId)).map(e=>(({roleId:e,name:a},t)=>n.createElement(s.a,{key:e,onClick:()=>t(e)},a))(e,e=>u([e,...t])))))))},"./src/badges/elements.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/material-ui/IconButton/index.js")),r=t.n(o),s=t("./src/styles/SVGLibrary.tsx"),i=t("./src/styles/index.ts"),l=t("./src/styles/font.ts"),d=t("./src/layout/Span.tsx"),u=t("./node_modules/ramda/index.js");t.n(u);const c={width:24,height:24,flex:"none",marginLeft:8},m=Object(u.omit)(["flex","marginLeft"]),p=Object(l.body1)(i["f"]`
    max-width: 100%;
    box-sizing: border-box;
    height: 32px;
    font-size: 13px;
    line-height: 32px;
    text-align: center;

    border-radius: 100px;
    border-width: 1px;

    margin: 0 6px 8px 0;
    padding: 0 12px;
`)(d.b),f=i["f"]`
    ${({disabled:e})=>e?"":"\n        display: flex;\n        align-items: center;\n\n        padding: 4px 4px 4px 12px;\n    "}

    background-color: ${({color:e})=>e};
    border-color: ${({color:e})=>e};
    border-style: solid;
    color: white;
`(p);a.d=f;const h=i["f"]`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 0 1 auto;
    max-width: 100%;
    box-sizing: border-box;
    display: inline-block;
`(d.b);a.c=h;const _=i["f"]`
    display: flex;
    align-items: center;
    padding: 0 4.5px 0 12.5px;
    color: ${"rgba(0,0,0,0.54)"};
    border-color: ${"rgba(0,0,0,0.38)"};
    border-style: dashed;
    cursor: pointer;
`(p);a.a=_;a.e=(e=>n.createElement(r.a,Object.assign({style:Object.assign({},c)},e),n.createElement(s.a.DeleteCross,{style:Object.assign({},m(c)),fill:"white"})));a.b=(e=>n.createElement(r.a,Object.assign({style:Object.assign({},c)},e),n.createElement(s.a.AddButton,{style:Object.assign({},m(c)),fill:"rgba(0,0,0,0.38)"})))},"./src/chapters/Anniversary.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/styles/SVGLibrary.tsx")),r=t("./node_modules/styled-components/dist/styled-components.es.js");const s=r["a"].div`
    background: url(/anniversary.jpg) no-repeat center center fixed;
    background-size: cover;
    width: 100%;
    height: calc(100vh - 54px);
    filter: opacity(90%);
`,i=()=>n.createElement(s,null,null),l={index:{component:i,path:"/app/anniversary",innerIndex:"/app/anniversary",icon:n.createElement(o.a.Help,null),label:"Раскрыть тему",title:"Нам 10 лет"}};a.a=l},"./src/chapters/LoginPage.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/react-redux/es/index.js")),r=t("./src/store/credentials.ts"),s=t("./src/store/connection.ts"),i=t("./src/inputs/index.ts"),l=t("./src/controls/index.ts"),d=t("./src/layout/index.ts"),u=t("../isomorphic/dist/index.js"),c=(t.n(u),t("./src/styles/index.ts")),m=t("./node_modules/material-ui/Paper/index.js"),p=t.n(m),f=t("./src/layout/Div.tsx"),h=t("./src/styles/colors.ts"),_=t("./src/layout/ServicePageLayout.tsx");const b=c["f"]`
    color: ${h.m.DEFAULT_BLACK};
    font-family: Roboto;
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 32px;
`(f.a),v=c["f"]`
    min-width: 384px;
`(p.a),y=c["f"]`
    width: 36px;
`(l.b),g=c["f"]`
    padding: 32px 32px 92px 32px;
`(f.a),k=c["f"]`
    padding: 12px 32px 12px 32px;
    font-family: Roboto;
    background-color: ${h.m.PURPLE_WHITE};
    font-size: 13px;
    line-height: 1.54;
    color: ${h.m.EXTRA_LIGHT_RED};
    border-bottom: 1px solid ${h.m.DARK_GRAY};
`(f.a);const j=Object(o.b)(e=>({credentials:e.credentials,connection:e.connection}))(class extends n.Component{constructor(e){super(e),this.doLogin=(()=>this.props.dispatch(u.actions.client.authRequest())),this.state={}}render(){return n.createElement(_.a,{title:"Вход в систему",label:"Центральный сервер"},n.createElement(d.k,{gap:15},n.createElement(v,null,this.props.credentials.wrongCredentials&&n.createElement(k,null,"Ошибка: Неверные логин и/или пароль"),n.createElement(g,null,n.createElement(b,null,"Введите Логин и Пароль для входа в систему"),n.createElement(i.g,{label:"Сервер",disabled:this.props.gatewayDisabled,value:this.props.connection.gateway||"",onChange:e=>this.props.dispatch(s.a.gatewayChanged(e)),helperText:this.props.credentials.wrongCredentials&&"Ошибка"}),n.createElement(i.g,{label:"Логин",value:this.props.credentials.login||"",error:this.props.credentials.wrongCredentials,onChange:e=>this.props.dispatch(r.a.setCredentials({login:e}))}),n.createElement(i.g,{label:"Пароль",type:"password",value:this.props.credentials.password||"",error:this.props.credentials.wrongCredentials,onChange:e=>this.props.dispatch(r.a.setCredentials({password:e})),helperText:this.props.credentials.wrongCredentials&&"Ошибка"}))),n.createElement("div",{style:{display:"flex",flexDirection:"row-reverse"}},n.createElement(y,{primary:!0,disabled:!(this.props.credentials.login&&this.props.credentials.password&&this.props.connection.gateway&&this.props.connection.isConnected),onClick:this.doLogin},"Вход"))))}});a.a=j},"./src/chapters/WellForGroupTabs.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/smart/props.ts")),r=t("./src/layout/CenteredCaption.tsx"),s=t("./src/smart/makeValue.ts"),i=t("./src/smart/caseRender.ts"),l=t("./src/chapters/adminParts.ts"),d=t("../biz/dist/index.js"),u=(t.n(d),t("./node_modules/material-ui/index.es.js"));const c=Object(i.a)(l.h).isNilOrEmpty("data",Object(r.a)("Нет добавленных скважин")),m=Object(o.a)(c).connectProp("data",d.selectors.wells.byGroup),p=Object(i.a)(l.b).isNilOrEmpty("data",Object(r.a)("Нет добавленных групп")),f=Object(o.a)(p).connectProp("data",e=>d.selectors.projects.byGroup(e.groupId)),h=Object(i.a)(l.h).isNilOrEmpty("data",Object(r.a)("Нет доступных скважин")),_=Object(o.a)(h).connectProp("data",e=>d.selectors.wells.byProjectInGroup(e)).defaultProp("noDividers",!0);a.a=Object(s.a)("one").addProps().of(({value:e,groupId:a,onChange:t})=>n.createElement("div",null,n.createElement(u.b,{value:e||"one",onChange:(e,a)=>t(a)},n.createElement(u.a,{value:"one",label:"Скважины"}),n.createElement(u.a,{value:"two",label:"Группы"})),"one"===e?n.createElement(m,{groupId:a,withPagination:!0}):n.createElement(f,{groupId:a,withPagination:!0,expandedRowRender:(e,t)=>n.createElement(_,{projectId:t,groupId:a})})))},"./src/chapters/access/ChapterAccess.tsx":function(e,a,t){"use strict";var n=t("./src/app/nav.tsx"),o=t("./src/layout/TabbedPage.tsx");const r=Object(o.a)(()=>[n.a.app.access.users.index,n.a.app.access.userGroups.index,n.a.app.access.roles.index]);a.a=r},"./src/chapters/access/ColumnsGroup.tsx":function(e,a,t){"use strict";var n=t("./node_modules/moment/moment.js"),o=(t.n(n),t("./src/controls/SearchMatch.tsx")),r=t("./src/layout/Span.tsx"),s=t("./node_modules/ramda/index.js"),i=(t.n(s),t("./src/styles/font.ts")),l=t("./src/layout/Div.tsx"),d=t("./src/styles/restyle.ts"),u=t("./node_modules/recompose/es/Recompose.js"),c=t("./node_modules/react/index.js");t.n(c);const m=Object(i.caption)()(r.b),p=Object(u.a)(e=>`${e}.`,s.toUpper,s.head),f=d["a"]`
    text-align: right;
`(l.a),h=(e,a)=>Object.keys(a).map(e=>a[e]).filter(a=>a.groupId===e).length,_=[{title:"Название",dataIndex:"name"},{title:"Пользователи",dataIndex:"groupId",sorter:({users:e})=>(a,t)=>h(a.groupId,e)-h(t.groupId,e),renderHeader:e=>c.createElement(f,null,e),render:(e,a,t)=>c.createElement(f,null,h(e,t.props.users))},{title:"Создал",dataIndex:"creatorUserId",render:(e,a,t)=>{const{firstName:n,patrName:o,lastName:r}=t.props.users[e];return`${r} ${p(n)} ${p(o)}`}},{title:"Дата создания",dataIndex:"created",sorter:()=>(e,a)=>n(e.creationDate).isBefore(a.creationDate)?-1:1,render:e=>c.createElement(m,null,c.createElement(o.a,null,n(e).format("DD MMM YYYY")))}];a.a=_},"./src/chapters/access/ColumnsRole.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/styled-components/dist/styled-components.es.js")),r=t("./src/styles/font.ts");const s=o["a"].div`
text-align: right;
`,i=(Object(r.caption)()(s),(e,a)=>Object.keys(a).map(e=>a[e]).filter(a=>a.roleIds.includes(e)).length),l=["name",{title:"Пользователи",dataIndex:"roleId",sorter:({users:e})=>(a,t)=>i(a.roleId,e)-i(t.roleId,e),render:(e,a,t)=>n.createElement(s,null,i(e,t.props.users))},"creatorUserId","creationDate","comment"];a.a=l},"./src/chapters/access/ColumnsUser.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("../biz/dist/index.js")),r=(t.n(o),t("./src/roles/Rolebox/RoleBox.tsx")),s=t("./node_modules/moment/moment.js"),i=(t.n(s),t("./src/styles/font.ts")),l=t("./src/styles/restyle.ts"),d=t("./src/layout/Div.tsx"),u=t("./src/controls/SearchMatch.tsx");const c=Object(i.caption)(l["a"]`
    text-align: right;
`)(d.a),m=[{title:"ФИО",dataIndex:"userId",render:(e,a)=>Object(o.sel)(o.USER).getFullName(a)()},{title:"Роли",dataIndex:"roleIds",renderHeader:e=>n.createElement("div",{style:{textAlign:"right"}},e),render:e=>n.createElement(r.a,{values:e,style:{textAlign:"right"}})},{title:"Организация",dataIndex:"organization"},{title:"Должность",dataIndex:"position"},{title:"Был в системе",dataIndex:"lastVisitTime",render:e=>n.createElement(c,null,n.createElement(u.a,null,e?s(e).fromNow():"неизвестно"))}];a.a=m},"./src/chapters/access/PageAssignWell.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/layout/PageLayout.tsx")),r=t("./src/styles/Typography.tsx"),s=t("./src/layout/Box.tsx"),i=t("./src/layout/Span.tsx"),l=t("./src/store/configureStore.tsx"),d=t("./node_modules/material-ui/Button/index.js"),u=t.n(d),c=t("./node_modules/react-router-redux/es/index.js"),m=t("./src/app/nav.tsx"),p=t("../biz/dist/index.js"),f=(t.n(p),t("./src/layout/Paper.tsx")),h=t("./src/grids/SmartToolbar.tsx"),_=t("./src/smart/Stateful.ts"),b=t("./src/grids/pureTree.ts"),v=t("./src/store/getFrontendStore.ts"),y=t("./src/chapters/adminParts.ts");const g=Object(h.c)(),k=Object(b.a)(p.WELL).ap(e=>n.createElement(f.a,null,n.createElement(g,Object.assign({},e),({value:e})=>e&&e.length?`Выбрано ${Object(p.pluralize)(p.WELL)(e.length)}`:p.WELL.lang.name),n.createElement(y.g,Object.assign({},e)))).connect((e,{userGroup:a})=>({data:Object(p.sel)(p.WELL).asList()(e).filter(e=>!a.wellIds.includes(e.wellId))}));a.a=class extends _.a{constructor(){super(...arguments),this.onAssign=(()=>{const{groupId:e}=this.props.match.params;((e,a,t=[])=>{const n=[...Object(p.sel)(p.GROUP).byKey(e)(a).wellIds,...t];Object(l.c)(p.actions.update(p.GROUP,e,{wellIds:n}))})(e,Object(v.a)().getState(),this.state.wellIds),Object(l.c)(Object(c.d)(m.a.app.access.userGroup.index.get({groupId:e})))}),this.onCancel=(()=>Object(l.c)(Object(c.d)(m.a.app.access.userGroups.index.path)))}render(){const e=this.props.match.params.groupId,a=p.GROUP.byKey(e)(Object(v.a)().getState()),t=this.state.wellIds||[];return n.createElement(o.a,null,n.createElement(r.Title,null,"Добавление скважины"),n.createElement(i.a.Caption2,null,'Выбранные скважины будут доступные гурппе пользователей "',a.name,'"'),n.createElement(k,{mode:"multiSelect",idKey:"wellId",userGroup:a,value:t,onChange:e=>this.setState({wellIds:e})}),n.createElement(s.a,{reversed:!0},n.createElement(u.a,{disabled:!this.state.wellIds||!this.state.wellIds.length,onClick:this.onAssign},"Добавить скважины"),n.createElement(u.a,{onClick:this.onCancel},"Отмена")))}}},"./src/chapters/access/PageGroupList.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/layout/Span.tsx")),r=t("./src/styles/font.ts"),s=t("./src/controls/Fab.tsx"),i=t("./src/styles/SVGLibrary.tsx"),l=t("./src/grids/grid/gridElements.tsx"),d=t("../biz/dist/index.js"),u=(t.n(d),t("./node_modules/ramda/index.js")),c=(t.n(u),t("./src/styles/restyle.ts")),m=t("./src/layout/Div.tsx"),p=t("./src/grids/pureTree.ts"),f=t("./src/chapters/adminParts.ts"),h=t("./src/smart/props.ts");Object(r.caption)()(o.b),Object(u.compose)(e=>`${e}.`,u.toUpper,u.head),c["a"]`
    text-align: right;
`(m.a);const _=Object(p.a)(d.GROUP).ap(f.e).contramap(l.a),b=Object(h.a)(_).connectProp("data",d.GROUP.asMap);a.a=(()=>n.createElement("div",null,n.createElement(b,null),n.createElement(s.a,{onClick:()=>{}},n.createElement(i.a.Add,null))))},"./src/chapters/access/PageRolesList.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/controls/Fab.tsx")),r=t("../biz/dist/index.js"),s=(t.n(r),t("./src/styles/SVGLibrary.tsx")),i=t("./src/grids/grid/gridElements.tsx"),l=t("./src/chapters/adminParts.ts"),d=t("./src/smart/Pure.ts");const u=Object(d.a)().of(l.c).connect(e=>({data:r.ROLE.asMap()(e),scheme:r.ROLE})).contramap(i.a);a.a=(()=>n.createElement("div",null,n.createElement(u,{title:"Роли"}),n.createElement(o.a,{onClick:!0},n.createElement(s.a.Add,null))))},"./src/chapters/access/PageUsersList.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/controls/Fab.tsx")),r=t("./src/styles/SVGLibrary.tsx"),s=t("./src/app/nav.tsx"),i=t("../biz/dist/index.js"),l=(t.n(i),t("./src/grids/grid/gridHelpers.ts")),d=t("./src/grids/grid/gridElements.tsx"),u=t("./src/chapters/adminParts.ts"),c=t("./src/smart/Pure.ts");const m=Object(c.a)().of(u.d).connect(Object(l.b)(i.USER)).contramap(d.a);a.a=(()=>n.createElement("div",null,n.createElement(m,{title:"Пользователи"}),n.createElement(o.a,{link:s.a.app.access.addUser.index.path},n.createElement(r.a.Add,null))))},"./src/chapters/access/accessNav.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/chapters/access/ChapterAccess.tsx")),r=t("./src/chapters/access/user/PageUser.tsx"),s=t("./src/chapters/access/PageRolesList.tsx"),i=t("./src/chapters/access/group/PageUserGroup.tsx"),l=t("./src/chapters/access/PageAssignWell.tsx"),d=t("./src/chapters/access/PageUsersList.tsx"),u=t("./src/chapters/access/createRole/WizardRole.tsx"),c=t("./src/chapters/access/role/PageRole.tsx"),m=t("./src/chapters/access/PageGroupList.tsx"),p=t("./src/chapters/access/role/PageAssignRole.tsx"),f=t("./src/chapters/access/createUserGroup/WizardUserGroup.tsx"),h=t("./src/chapters/access/createUser/WizardUser.tsx"),_=t("./src/chapters/access/group/PageAssignUserGroup.tsx"),b=t("../biz/dist/index.js"),v=(t.n(b),t("./src/styles/SVGLibrary.tsx"));const y={index:{path:"/app/access/users",title:"Пользователи",label:"Пользователи",component:d.a}},g={index:{path:"/app/access/createUser/:userId",get:e=>"/app/access/createUser/"+e.userId,title:e=>b.USER.getShortName(b.USER.bySpec(e)())(),component:r.a}},k={index:{path:"/app/access/addUser",title:"Новый пользователь",component:h.a}},j={index:{path:"/app/access/createRole",title:"Новая роль",component:u.a}},x={index:{path:"/app/access/assignRole/:roleId",get:e=>"/app/access/assignRole/"+e.roleId,title:"Нозначение роли",component:p.a}},w={index:{path:"/app/access/roles",title:"Роли",label:"Роли",component:s.a}},M={index:{path:"/app/access/userGroups",title:"Группы пользователей",label:"группы",component:m.a}},S={index:{path:"/app/access/group/:groupId",get:e=>"/app/access/group/"+e.groupId,title:"Группы пользователей",component:i.a}},L={index:{path:"/app/access/assignUserGroup/:groupId",get:e=>"/app/access/assignUserGroup/"+e.groupId,title:"Назначение группы пользователей",component:_.a}},z={index:{path:"/app/access/role/:roleId",get:e=>"/app/access/role/"+e.roleId,title:({roleId:e})=>{return`Роль '${b.ROLE.byKey(e)().name}'`},component:c.a}},T={index:{path:"/app/access/addUserGroup",title:"Новая группа пользователей",component:f.a}},E={index:{path:"/app/access/assignWell/:groupId",get:e=>"/app/access/assignWell/"+e.groupId,title:"Добавление скважин в группу пользователей",component:l.a}};a.a={index:{component:o.a,path:"/app/access",innerIndex:"/app/access/users",icon:n.createElement(v.b.User,null),label:"Пользователи",redirect:"/app/access/users",title:"Управление пользователями"},users:y,userGroups:M,roles:w,user:g,addUser:k,userGroup:S,addUserGroup:T,assignUserGroup:L,role:z,createRole:j,assignRole:x,assignWell:E}},"./src/chapters/access/createRole/StepRightsInRole.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/styled-components/dist/styled-components.es.js")),r=t("../biz/dist/index.js"),s=(t.n(r),t("./src/smart/Form.ts")),i=t("./src/smart/form/bindInput.ts"),l=t("./src/layout/index.ts"),d=t("./src/roles/StepRightInRole/RoleSetup.tsx"),u=t("./src/store/createRoleRights.ts"),c=t("./src/styles/index.ts"),m=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)a.indexOf(n[o])<0&&(t[n[o]]=e[n[o]])}return t};const p=e=>`border-${e}: 1px solid ${c.e.BORDER_GRAY};`,f=Object(o["a"])(l["a"])`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 40px;
    flex: 0 0 144px;
    ${p("left")}
    ${p("bottom")}

    &:last-child {
        ${p("right")}
    }

    &:first-child {
        justify-content: flex-start;
        flex-grow: 2;
        padding-left: 24px;
    }

    > * {
        margin: 0;
    }
`,h=e=>{var{label:a}=e,t=m(e,["label"]);return n.createElement(l.d,{stretch:!0,style:{alignItems:"stretch"}},n.createElement(f,null,n.createElement(l.i.Body2,null,a)),n.createElement(d.a,Object.assign({count:u.c.length},t)))},_=()=>n.createElement(l.d,{style:{alignItems:"center"}},n.createElement(f,null,n.createElement(l.i.Caption,null,"Основные функции в системе")),u.c.map(e=>n.createElement(f,null,n.createElement(l.i.Caption,null,e))));a.a=Object(s.a)(r.ROLE,["rights"]).ap(e=>n.createElement(l.g,null,n.createElement(_,null),Object.keys(u.b).map((e=>a=>"drill"===a||"survey"===a?n.createElement(h,Object.assign({},Object(i.a)(["reportRights",a])(e),{label:u.b[a]})):n.createElement(h,Object.assign({},Object(i.a)(["rights",a])(e),{label:u.b[a]})))(e))))},"./src/chapters/access/createRole/StepRoleName.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("../biz/dist/index.js")),r=(t.n(o),t("./src/smart/Form.ts")),s=t("./src/layout/Paper.tsx"),i=t("./src/styles/Typography.tsx"),l=t("./src/smart/form/bindInput.ts"),d=t("./src/layout/Box.tsx"),u=t("./src/roles/Rolebox/RoleBox.tsx"),c=t("./src/inputs/TextInput.tsx"),m=t("./src/styles/restyle.ts");const p=m["a"]`
    position: relative;
`(d.a),f=m["a"]`
    margin-bottom: 32px;
`(i.Subheading),h=m["a"]`
    position: absolute;
    right: 0;
    top: calc(50% - 23px);
`(u.b),_=m["a"]`
    padding: 32px 24px;
    &:not(:last-child) {
        margin-bottom: 30px;
    }
`(s.a);a.a=Object(r.a)(o.ROLE,["name","comment"]).ap(e=>n.createElement("div",{style:{width:"600px"}},n.createElement(_,null,n.createElement(f,null,"Назовите роль"),n.createElement(p,null,n.createElement(c.a,Object.assign({label:"Название роли"},Object(l.b)("name")(e))),e.model.name&&n.createElement(h,{values:["0"],roles:{0:{color:e.model.color,name:e.model.name,roleId:"0"}}}))),n.createElement(_,null,n.createElement(f,null,"Комментарий"),n.createElement(d.a,null,n.createElement(c.a,Object.assign({label:"Комментарий"},Object(l.b)("comment")(e))),n.createElement("div",{style:{width:"16px"}})))))},"./src/chapters/access/createRole/WizardRole.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/wizard/Wizard.tsx")),r=t("./node_modules/randomcolor/randomColor.js"),s=(t.n(r),t("./src/store/configureStore.tsx")),i=t("../biz/dist/index.js"),l=(t.n(i),t("./src/chapters/access/createRole/StepRoleName.tsx")),d=t("./src/chapters/access/createRole/StepRightsInRole.tsx"),u=t("./src/controls/AlertDialog.tsx"),c=t("./node_modules/react-router-redux/es/index.js"),m=t("./src/app/nav.tsx"),p=t("./src/store/ui.ts"),f=t("./src/smart/renderChildren.ts"),h=t("./src/layout/index.ts"),_=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)a.indexOf(n[o])<0&&(t[n[o]]=e[n[o]])}return t};const b=[{label:"Новая роль",description:"Название",component:l.a},{label:"Функционал",description:"Функции в системе",component:d.a.contramap(e=>{var{children:a}=e,t=_(e,["children"]);return n.createElement(h.k,{gap:16,width:1230},n.createElement(h.i.Caption2,null,"Функционал роли будет возможно изменить в настройках роли"),Object(f.a)(a,t))})}];a.a=class extends n.Component{constructor(e){super(e),this.state={}}render(){const e=Object(i.sel)(i.ROLE).byKey(this.state.roleId)(),a="Роль "+(e?e.name:"")+" создана. Хотите назначить эту роль пользователям?";return n.createElement("div",null,n.createElement(o.a,{model:{color:(()=>r({luminosity:"dark",format:"hex"}))(),rights:{},reportRights:{}},steps:b,onExit:()=>Object(s.c)(p.a.confirmDialog({action:Object(c.b)(),title:"Отмена создания роли",text:"Вы действительно хотите отменить создание новой роли",cancelText:"Нет",submitText:"Отменить"})),onComplete:e=>{const a=i.actions.create(i.ROLE,e);Object(s.c)(a),this.setState({roleId:a.payload.id,isOpen:!0})}}),n.createElement(u.a,{open:this.state.isOpen,okText:"Назначить",cancelText:"Позже",title:"Назначение роли пользователям",text:a,onCancel:()=>Object(s.c)(Object(c.b)()),onOk:()=>Object(s.c)(Object(c.d)(m.a.app.access.assignRole.index.get(this.state)))}))}}},"./src/chapters/access/createUser/AddRolesStep.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/smart/Form.ts")),r=t("../biz/dist/index.js"),s=(t.n(r),t("./src/layout/Paper.tsx")),i=t("./src/roles/RoleboxExtended/RoleBoxExtended.tsx"),l=t("./src/store/connectSpec.ts"),d=t("../utils/dist/index.js"),u=(t.n(d),t("./src/styles/Typography.tsx")),c=t("./src/store/configureStore.tsx");const m=Object(o.a)(r.USER,["roleIds"]),p=Object(l.a)({roles:Object(r.sel)(r.ROLE).asList()})(i.a);a.a=m.ap(e=>n.createElement(s.a,{style:{padding:"32px",width:"600px"}},n.createElement(u.Subheading,{style:{marginBottom:32}},"Функционал пользователя в системе может быть ограничен. Для этого назначьте пользователю одну или несколько ролей"),n.createElement(p,{editable:!0,roles:Object(d.toIndexedArray)(Object(r.schemeLens)(r.ROLE).get(Object(c.e)().getState())),onChange:a=>{e.onChange({property:"roleIds",value:a})},values:e.model.roleIds||[]})))},"./src/chapters/access/createUser/CreateLoginStep.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/Card.tsx")),r=t("./src/styles/restyle.ts"),s=t("./src/layout/Div.tsx"),i=t("./src/inputs/TextInput.tsx"),l=t("./src/controls/Button.tsx"),d=t("./src/layout/Box.tsx"),u=t("./node_modules/material-ui/Typography/index.js"),c=t.n(u),m=t("./src/inputs/Switch.tsx"),p=t("./src/smart/form/bindInput.ts"),f=t("./src/smart/Form.ts"),h=t("../biz/dist/index.js"),_=(t.n(h),t("../random/dist/index.js"));t.n(_);const b=r["a"]`
    width:424px;
    padding: 32px;
`(o.a),v=r["a"]`
	color: rgba(0,0,0,0.87);
	font-family: Roboto;
	font-size: 15px !important;
	line-height: 24px;
`(s.a),y=r["a"]`
    margin: 0 -16px;
`(l.a),g=Object(f.a)(h.USER,["login","password","isMasterUser"]).ap(e=>{const a=e.model.isMasterUser?"\n                Пользователю будет разрешено авторизоваться\n                как на центральном сервере, так и на буровых.\n                При входе в систему пользователь установит свой пароль\n            ":"\n                Пользователю будет разрешено авторизоваться только на\n                буровых. При входе в систему пользователь будет\n                использовать установленный Вами пароль\n            ";return n.createElement(b,null,n.createElement(d.b,{gap:36},n.createElement(v,null,"Создайте логин и пароль для авторизации",n.createElement("br",null)," пользователя в системе"),n.createElement(i.a,Object.assign({},Object(p.b)("login")(e),{label:"Логин"})),n.createElement(i.a,Object.assign({},Object(p.b)("password")(e),{label:"Пароль"})),n.createElement(d.a,{stretch:!0,reversed:!0,style:{margin:"20px 0 10px"}},n.createElement(y,{color:"primary",onClick:()=>e.onChange({property:"password",value:_.generatePassword()})},"СГЕНЕРИРОВАТЬ ПАРОЛЬ")),n.createElement(m.a,Object.assign({},Object(p.b)("isMasterUser")(e),{label:"Авторизация на сервере"})),n.createElement(c.a,{type:"caption",gutterBottom:!0},a)))});a.a=g},"./src/chapters/access/createUser/CreatePersonalDataStep.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/Card.tsx")),r=t("./src/styles/restyle.ts"),s=t("./src/layout/Div.tsx"),i=t("./src/inputs/TextInput.tsx"),l=t("./src/layout/Box.tsx"),d=t("./src/smart/form/bindInput.ts"),u=t("./src/layout/FormSection.tsx"),c=t("./src/layout/Avatar.tsx"),m=t("./src/smart/Form.ts"),p=t("../biz/dist/index.js"),f=(t.n(p),t("./src/styles/SVGLibrary.tsx"));const h=r["a"]`
    width: 828px;
    padding: 0px;
`(o.a),_=(r["a"]`
	color: rgba(0,0,0,0.87);
	font-family: Roboto;
	font-size: 15px !important;
	line-height: 24px;
`(s.a),Object(m.a)(p.USER,["firstName","lastName","email"]));a.a=_.ap(e=>n.createElement(h,null,n.createElement(l.b,{stretch:!0,style:{paddingBottom:16}},n.createElement(u.a,{label:"Персональные данные",stretch:!0,icon:f.b.PersonCopy},n.createElement(l.a,{gap:24},n.createElement(c.a,{width:192,height:208}),n.createElement(l.b,{gap:22,width:480},n.createElement(i.a,Object.assign({},Object(d.b)("lastName")(e),{label:"Фамилия"})),n.createElement(i.a,Object.assign({},Object(d.b)("firstName")(e),{label:"Имя"})),n.createElement(i.a,Object.assign({},Object(d.b)("patrName")(e),{label:"Отчество"}))))),n.createElement(l.a,{stretch:!0},n.createElement(u.a,{width:414,label:"Рабочие данные",icon:f.b.Work},n.createElement(l.b,{gap:16},n.createElement(i.a,Object.assign({},Object(d.b)("organization")(e),{label:"Организация"})),n.createElement(i.a,Object.assign({},Object(d.b)("position")(e),{label:"Должность"})))),n.createElement(u.a,{width:414,label:"Контактные данные",icon:f.b.Phone},n.createElement(l.b,{gap:16},n.createElement(i.a,Object.assign({},Object(d.b)("email")(e),{label:"Email"})),n.createElement(i.a,Object.assign({},Object(d.b)("phone")(e),{label:"Телефон"}))))))))},"./src/chapters/access/createUser/WizardUser.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/wizard/Wizard.tsx")),r=t("../biz/dist/index.js"),s=(t.n(r),t("./src/chapters/access/createUser/CreateLoginStep.tsx")),i=t("./src/chapters/access/createUser/CreatePersonalDataStep.tsx"),l=t("./src/smart/Pure.ts"),d=t("./src/store/configureStore.tsx"),u=t("./src/chapters/access/createUser/AddRolesStep.tsx"),c=t("./node_modules/react-router-redux/es/index.js"),m=t("./src/store/ui.ts");const p=[{label:"Данные авторизации",description:"Логин и Пароль",component:s.a},{label:"Персональные данные",description:"Данные пользователя",component:i.a},{label:"Доступный функционал",description:"Назначение ролей",component:u.a}];a.a=Object(l.a)().ap(e=>n.createElement(o.a,{steps:p,onExit:()=>e.dispatch(m.a.confirmDialog({action:Object(c.b)(),title:"Отмена создания пользователя",text:"Вы действительно хотите отменить создание нового пользователя",cancelText:"Нет",submitText:"Отменить"})),onComplete:e=>{Object(d.e)().dispatch(r.actions.create(r.USER,e)),Object(d.e)().dispatch(Object(c.b)())}}))},"./src/chapters/access/createUserGroup/StepUserGroupName.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/smart/Form.ts")),r=t("./src/layout/Paper.tsx"),s=t("./src/styles/Typography.tsx"),i=t("./src/smart/form/bindInput.ts"),l=t("./src/layout/Box.tsx"),d=t("./src/inputs/TextInput.tsx"),u=t("../biz/dist/index.js");t.n(u);a.a=Object(o.a)(u.GROUP,["name"]).ap(e=>n.createElement("div",null,n.createElement(r.a,{style:{padding:"32px",width:"600px",marginBottom:"30px"}},n.createElement(s.Subheading,null,"Назовите групппу пользователей"),n.createElement(l.a,null,n.createElement(d.a,Object.assign({label:"Название группы"},Object(i.b)("name")(e)))))))},"./src/chapters/access/createUserGroup/StepUserGroupWells.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/smart/Form.ts")),r=t("./src/layout/Paper.tsx"),s=t("./src/layout/Box.tsx"),i=t("../biz/dist/index.js"),l=(t.n(i),t("./src/grids/list/List.tsx")),d=t("./node_modules/react-redux/es/index.js"),u=t("./node_modules/ramda/index.js"),c=(t.n(u),t("./src/layout/CenteredCaption.tsx")),m=t("./src/smart/caseRender.ts"),p=t("./src/grids/SmartToolbar.tsx"),f=t("./node_modules/styled-components/dist/styled-components.es.js"),h=t("./src/smart/Pure.ts"),_=t("./node_modules/material-ui/index.es.js"),b=t("./src/layout/Span.tsx"),v=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)a.indexOf(n[o])<0&&(t[n[o]]=e[n[o]])}return t};const y=f["a"].div`
    width: 1px;
    opacity: 0.38;
    background-color: #BDBDBD;
`,g=Object(l.a)(i.WELL),k=Object(m.a)(g),j=k.isNilOrEmpty("data",Object(c.a)("В проекте нет скважин")),x=k.isNilOrEmpty("data",Object(c.a)("Нет скважин вне проектов")),w=k.isNilOrEmpty("data",Object(c.a)("Не выбрано ни одной скважины")),M=Object(d.b)(e=>({wells:Object(i.sel)(i.WELL).asList()(e)}))(e=>{var{wellIds:a,wells:t,onChange:o}=e,r=v(e,["wellIds","wells","onChange"]);const l=0===a.length?Object(i.pluralize)(i.WELL)(t.length):`Выбрано ${Object(i.pluralize)(i.WELL)(a.length)} из ${t.length}`;return n.createElement(s.b,Object.assign({},r),n.createElement(p.a,{active:a.length>0,bottomBorder:!0,topBorder:!0},l),n.createElement(s.a,null,n.createElement(x,{height:"auto",width:414,mode:"multiSelect",data:t.filter(e=>!a.includes(e.wellId)),render:Object(i.sel)(i.WELL).getFullName,value:[],onChange:e=>o([...a,...e])}),n.createElement(y,null),n.createElement(w,{height:"auto",width:414,mode:"multiSelect",data:t.filter(e=>a.includes(e.wellId)),render:Object(i.sel)(i.WELL).getFullName,value:a,onChange:o})))}),S=Object(m.a)(Object(l.a)(i.PROJECT)),L=S.match(e=>Object(u.isEmpty)(e.data),Object(c.a)("Нет доступных групп")),z=S.match(e=>Object(u.isEmpty)(e.data),Object(c.a)("Не выбрано ни одной группы")),T=(e,a)=>n.createElement("div",{style:{width:"100%"}},e.name,n.createElement(b.a.Caption,{style:{float:"right"}},((e,a)=>Object(i.pluralize)(i.WELL)(a.wells.filter(a=>a.projectId===e.projectId).length))(e,a.props))),E=(e,a)=>n.createElement(j,{noDividers:!0,mode:"",render:Object(i.sel)(i.WELL).getFullName,data:a.props.wells.filter(a=>a.projectId===e.projectId)}),D=Object(d.b)(e=>({wells:Object(i.sel)(i.WELL).asList()(e).filter(e=>void 0!==e.projectId),projects:Object(i.sel)(i.PROJECT).asList()(e)}))(e=>{var{projects:a,wells:t,projectIds:o,excludedWellsInProjects:r,onChange:l,onChangeExclusion:d}=e,u=v(e,["projects","wells","projectIds","excludedWellsInProjects","onChange","onChangeExclusion"]);const c=0===o.length?Object(i.pluralize)(i.PROJECT)(a.length):`Выбрано ${Object(i.pluralize)(i.PROJECT)(o.length)} из ${a.length}`;return n.createElement(s.b,Object.assign({},u),n.createElement(p.a,{active:o.length>0,bottomBorder:!0,topBorder:!0},c),n.createElement(s.a,null,n.createElement(L,{expandedRowRender:E,height:"auto",wells:t,width:414,mode:"multiSelect",data:a.filter(e=>!o.includes(e.projectId)),value:[],render:T,onChange:e=>l([...o,...e])}),n.createElement(y,null),n.createElement(z,{expandedRowRender:((e,a)=>(t,o)=>{const r=o.props.wells.filter(e=>e.projectId===t.projectId),s=e[t.projectId]||[];return n.createElement(j,{noDividers:!0,mode:"multiSelect",data:r,inversedSelection:!0,value:s,render:Object(i.sel)(i.WELL).getFullName,onChange:e=>a({[t.projectId]:e})})})(r,d),height:"auto",wells:t,width:414,mode:"multiSelect",data:a.filter(e=>o.includes(e.projectId)),value:o,render:T,onChange:l})))}),P={onTabChange:Object(h.b)("onTabChange")};a.a=Object(o.a)(i.GROUP,["wellIds","projectIds","excludedWellsInProjects"]).addMsg(P).addReducer((e,a)=>"onTabChange"===a.type?Object.assign({},e,{activeTab:a.payload}):e).ap(e=>{return n.createElement("div",null,n.createElement(r.a,{style:{padding:"0px",width:"829px",height:"507px",marginBottom:"16px"}},n.createElement(s.b,null,n.createElement(_.b,{value:e.activeTab||"one",onChange:(a,t)=>e.onTabChange(t)},n.createElement(_.a,{value:"one",label:"Скважины"}),n.createElement(_.a,{value:"two",label:"Проекты"})),n.createElement("div",{style:{width:"100%",height:"459px"}},("one"===e.activeTab||!e.activeTab)&&n.createElement(M,{style:{maxHeight:"100%",height:"auto"},wellIds:e.model.wellIds,onChange:a=>e.onChange({property:"wellIds",value:a})}),"two"===e.activeTab&&n.createElement(D,{onChangeExclusion:a=>e.onChange({property:"excludedWellsInProjects",value:Object.assign({},e.model.excludedWellsInProjects,a)}),style:{maxHeight:"100%",height:"auto"},projectIds:e.model.projectIds,excludedWellsInProjects:e.model.excludedWellsInProjects,onChange:a=>e.onChange({property:"projectIds",value:a})})))))})},"./src/chapters/access/createUserGroup/WizardUserGroup.tsx":function(e,a,t){"use strict";var n=t("./src/store/getFrontendStore.ts"),o=t("./node_modules/react/index.js"),r=(t.n(o),t("./src/wizard/Wizard.tsx")),s=t("./src/store/configureStore.tsx"),i=t("../biz/dist/index.js"),l=(t.n(i),t("./node_modules/react-router-redux/es/index.js")),d=t("./src/chapters/access/createUserGroup/StepUserGroupName.tsx"),u=t("./src/chapters/access/createUserGroup/StepUserGroupWells.tsx"),c=t("./src/app/nav.tsx"),m=t("./src/controls/AlertDialog.tsx"),p=t("./src/store/ui.ts");const f=[{label:"Название группы",description:"Название",component:d.a},{label:"Права доступа",description:"Доступные скважины",component:u.a}];a.a=class extends o.Component{constructor(e){super(e),this.state={}}render(){const e=Object(n.a)().getState().biz.userGroups[this.state.groupId],a=`Группа ${e?e.name:""} создана. Хотите назначить эту группу пользователям?`;return o.createElement("div",null,o.createElement(r.a,{steps:f,model:{wellIds:[],projectIds:[],excludedWellsInProjects:{}},onExit:()=>Object(n.a)().dispatch(p.a.confirmDialog({action:Object(l.b)(),title:"Отмена создания группы пользователей",text:"Вы действительно хотите отменить создание новой группы пользователей",cancelText:"Нет",submitText:"Отменить"})),onComplete:e=>{const a=i.actions.create(i.GROUP,e);Object(s.e)().dispatch(a),this.setState({groupId:a.payload.id,isOpen:!0})}}),o.createElement(m.a,{open:this.state.isOpen,okText:"Назначить",cancelText:"Позже",title:"Назначение группы пользователям",text:a,onCancel:()=>Object(s.e)().dispatch(Object(l.b)()),onOk:()=>Object(s.e)().dispatch(Object(l.d)(c.a.app.access.assignUserGroup.index.get(this.state)))}))}}},"./src/chapters/access/group/PageAssignUserGroup.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/layout/PageLayout.tsx")),r=t("./src/chapters/access/ColumnsUser.tsx"),s=t("./src/grids/grid/Grid.tsx"),i=t("./src/styles/Typography.tsx"),l=t("../utils/dist/index.js"),d=(t.n(l),t("./src/layout/Box.tsx")),u=t("./src/layout/Span.tsx"),c=t("./src/store/configureStore.tsx"),m=t("./node_modules/material-ui/Button/index.js"),p=t.n(m),f=t("./node_modules/react-router-redux/es/index.js"),h=t("./src/app/nav.tsx"),_=t("../biz/dist/index.js"),b=(t.n(_),t("./src/layout/Paper.tsx")),v=t("./src/grids/SmartToolbar.tsx"),y=t("./src/smart/Stateful.ts"),g=t("./src/grids/pureTree.ts"),k=t("./src/store/getFrontendStore.ts");const j=Object(s.b)(r.a),x=Object(v.c)(),w=Object(g.a)(_.USER).ap(e=>n.createElement(b.a,null,n.createElement(x,Object.assign({},e),({value:e})=>e&&e.length?`Выбрано ${Object(_.pluralize)(_.USER)(e.length)}`:"Пользователи"),n.createElement(j,Object.assign({},e)))).connect(e=>({data:_.USER.whereProp("groupId")(e=>!e).asList(e)}));a.a=class extends y.a{constructor(){super(...arguments),this.onAssign=(()=>{const{groupId:e}=this.props.match.params;((e,a=[])=>a.forEach(a=>Object(c.c)(_.actions.update(_.USER,a,{groupId:e}))))(e,this.state.userIds),Object(c.c)(Object(f.d)(h.a.app.access.userGroup.index.get({groupId:e})))}),this.onCancel=(()=>Object(c.c)(Object(f.d)(h.a.app.access.userGroups.index.path)))}render(){const e=this.props.match.params.groupId,a=Object(_.sel)(_.GROUP).byKey(e)(Object(k.a)().getState()),t=this.state.userIds||[];return n.createElement(o.a,null,n.createElement(i.Title,null,"Назначение группы пользователям"),n.createElement(u.a.Caption2,null,"Выбранные пользователи будут состоять в группе ",Object(l.capitalize)(a.name)),n.createElement(w,{mode:"multiSelect",idKey:"userId",groupId:e,value:t,onChange:e=>this.setState({userIds:e})}),n.createElement(d.a,{reversed:!0},n.createElement(p.a,{disabled:!this.state.userIds||!this.state.userIds.length,onClick:this.onAssign},"Назначить группу"),n.createElement(p.a,{onClick:this.onCancel},"Отмена")))}}},"./src/chapters/access/group/PageUserGroup.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/smart/RoutedPage.ts")),r=t("./src/layout/PageLayout.tsx"),s=t("./src/layout/Box.tsx"),i=t("./src/controls/AdminItemToolbar.tsx"),l=t("../biz/dist/index.js"),d=(t.n(l),t("./src/layout/Span.tsx")),u=t("./src/chapters/access/group/UsersInGroup.tsx"),c=t("./src/chapters/WellForGroupTabs.tsx"),m=t("./src/layout/Paper.tsx"),p=t("./src/store/configureStore.tsx"),f=t("./src/smart/Form.ts"),h=t("./src/smart/form/DialogEditFormUC.tsx"),_=t("./src/chapters/access/createUserGroup/StepUserGroupWells.tsx"),b=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)a.indexOf(n[o])<0&&(t[n[o]]=e[n[o]])}return t};const v=Object(i.b)(l.GROUP),y=Object(f.a)(l.GROUP,["wellIds","projectIds","excludedWellsInProjects"]).ap(e=>n.createElement(h.a,{stretch:!0,model:e.model,editor:_.a,viewer:n.createElement(c.a,{groupId:e.groupId}),onEdit:a=>Object(p.c)(l.actions.update(l.GROUP,e.groupId,a))})).connect((e,a)=>({model:Object(l.sel)(l.GROUP).byKey(a.groupId)(e)})),g=e=>{var{groupId:a}=e;b(e,["groupId"]);return n.createElement(r.a,null,n.createElement(s.b,{gap:16},n.createElement(v,{id:a}),n.createElement(u.a,{noun:l.USER.lang.some,groupId:a}),n.createElement(d.a.Caption,{style:{marginBottom:4}},"Скважины, которые доступны этой группе пользователей"),n.createElement(m.a,null,n.createElement(y,{groupId:a}))))};a.a=class extends o.a{render(){return n.createElement(g,{groupId:this.getParams().groupId})}}},"./src/chapters/access/group/UsersInGroup.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/grids/grid/Grid.tsx")),r=t("./src/chapters/access/ColumnsUser.tsx"),s=t("./src/layout/Paper.tsx"),i=t("./src/grids/pureTree.ts"),l=t("./src/grids/SmartToolbar.tsx"),d=t("./src/grids/Expandable.ts"),u=t("../biz/dist/index.js"),c=(t.n(u),t("./src/store/configureStore.tsx")),m=t("./node_modules/react-router-redux/es/index.js"),p=t("./src/app/nav.tsx"),f=t("./node_modules/ramda/index.js");t.n(f);const h=Object(o.b)(r.a),_=Object(l.b)();a.a=Object(i.a)(u.USER).connect((e,{groupId:a})=>({data:(e=>a=>Object(u.sel)(u.USER).asList()(e).filter(e=>e.groupId===a))(e)(a)})).ap(e=>n.createElement(s.a,{style:{marginBottom:25}},n.createElement(_,Object.assign({},e,{onRequestAdd:()=>Object(c.c)(Object(m.c)(p.a.app.access.assignUserGroup.index.get({groupId:e.groupId}))),onSelectionCancel:()=>e.onModeChange(d.b.VIEW),onSelectionSubmit:a=>{(e=>(e=[])=>e.forEach(e=>{Object(c.c)(u.actions.update(u.USER,e,{groupId:void 0}))}))(e.groupId)(a),e.onModeChange(d.b.VIEW)}}),e.mode!==d.b.VIEW?`Выбрано ${Object(u.pluralize)(u.USER)(e.value&&e.value.length)}`:"Пользователи"),n.createElement(h,Object.assign({idKey:"userId",onRowClick:e.mode===d.b.VIEW&&(e=>Object(c.c)(Object(m.c)(p.a.app.access.user.index.get(e))))},e))))},"./src/chapters/access/role/PageAssignRole.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/store/configureStore.tsx")),r=t("./node_modules/react-router-redux/es/index.js"),s=t("./src/app/nav.tsx"),i=t("../biz/dist/index.js"),l=(t.n(i),t("./src/store/getFrontendStore.ts")),d=t("./src/chapters/makeMultipleAssignView.tsx"),u=t("./src/chapters/adminParts.ts"),c=t("./src/smart/props.ts"),m=t("./src/smart/RoutedPage.ts");const p=Object(c.a)(Object(d.a)(u.d,i.USER)).connectProp("data",e=>i.USER.asList(a=>!a.roleIds||!a.roleIds.includes(e.roleId)));a.a=class extends m.a{constructor(){super(...arguments),this.onAssign=(e=>{const{roleId:a}=this.getParams();((e,a,t=[])=>t.forEach(t=>{const n=Object(i.schemeLens)(i.USER).get(a)[t],r={roleIds:n.roleIds?n.roleIds.concat([e]):[e]};Object(o.c)(i.actions.update(i.USER,t,r))}))(a,Object(l.a)().getState(),e),Object(o.c)(Object(r.d)(s.a.app.access.role.index.get({roleId:a})))}),this.onCancel=(()=>Object(o.c)(Object(r.d)(s.a.app.access.role.index.get(this.getParams()))))}render(){const e=this.props.match.params.roleId,a=Object(i.sel)(i.ROLE).byKey(e)();return n.createElement(p,{roleId:e,title:"Пользователи",okText:"Назначить роль",cancelText:"Отмена",caption:"Выбранным пользтователям будет назначена группа "+a.name,onOk:this.onAssign,onCancel:this.onCancel})}}},"./src/chapters/access/role/PageRole.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/react-router-redux/es/index.js")),r=t("./node_modules/ramda/index.js"),s=(t.n(r),t("./node_modules/react-redux/es/index.js")),i=t("./node_modules/styled-components/dist/styled-components.es.js"),l=t("./src/app/nav.tsx"),d=t("../biz/dist/index.js"),u=(t.n(d),t("./src/smart/RoutedPage.ts")),c=t("./src/smart/Pure.ts"),m=t("./src/smart/form/DialogEditForm.tsx"),p=t("./src/smart/renderChildren.ts"),f=t("./src/store/createRoleRights.ts"),h=t("./src/store/configureStore.tsx"),_=t("./src/grids/SmartToolbar.tsx"),b=t("./src/grids/grid/Grid.tsx"),v=t("./src/grids/pureTree.ts"),y=t("./src/grids/Expandable.ts"),g=t("./src/chapters/adminParts.ts"),k=t("./src/layout/index.ts"),j=t("./src/styles/index.ts"),x=t("./node_modules/material-ui/IconButton/index.js"),w=t.n(x),M=t("./src/controls/index.ts"),S=t("./src/chapters/access/createRole/StepRightsInRole.tsx"),L=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)a.indexOf(n[o])<0&&(t[n[o]]=e[n[o]])}return t};const z={paddingLeft:"24px",boxSizing:"border-box",minHeight:"64px"},T=i["a"].div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`,E=Object(_.b)(),D=Object(v.a)(d.USER).connect((e,{roleId:a})=>({data:Object(d.sel)(d.USER).asList()(e).filter(e=>e.roleIds.includes(a))})).ap(e=>n.createElement(k.g,null,n.createElement(E,Object.assign({},e,{onSelectionCancel:()=>e.onModeChange(y.b.VIEW),onSelectionSubmit:a=>{(e=>a=>t=>{t.map(a=>e.find(e=>e.userId===a)).forEach(e=>{const t=Object(r.without)(e.roleIds)([a]);Object(h.c)(d.actions.update(d.USER,e.userId,{roleIds:t}))})})(e.data)(e.roleId)(a),e.onModeChange(y.b.VIEW)},onRequestAdd:()=>Object(h.c)(Object(o.c)(l.a.app.access.assignRole.index.get({roleId:e.roleId})))}),e.mode!==y.b.VIEW?`Выбрано ${Object(d.pluralize)(d.USER)(e.value&&e.value.length)}`:"Пользователи"),n.createElement(g.d,Object.assign({isSelectionDisabled:e=>1===e.roleIds.length,selectionDisableReason:"У пользователя в системе должна быть как минимум одна роль",idKey:"userId"},e)))),P=Object(i["a"])(k["h"])`
    display: inline-block;
    max-width: 140px;
    width: 100%;
    text-align: center
`,O=Object(i["a"])(k["h"])`
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 50%;

    &.active {
        background-color: ${j.e.LIGHT_GREEN};
    }

    &.disabled {
        background-color: ${j.e.GRAY};
    }
`,A=e=>n.createElement(O,{className:"active"},n.createElement(j.c.Done,{fill:j.e.GREEN})),C=e=>n.createElement(O,{className:"disabled"},n.createElement(j.c.CloseCross,{fill:j.e.WHITE})),N=[{title:"Основные функции системы",dataIndex:"label"},{title:"value",dataIndex:"value",renderHeader:()=>f.c.map((e,a)=>n.createElement(P,{key:a},e)),render:(e,a)=>f.c.map((e,a)=>a+1).map(((e,a)=>t=>t>e||a.disabledValues.includes(t)?n.createElement(C,null):n.createElement(A,null))(e,a)).map((e,a)=>n.createElement(P,{key:a},e))}],R=Object(c.a)().of(Object(b.b)(N)).contramap(e=>n.createElement("div",null,n.createElement(T,{height:64,style:z},n.createElement(j.d.HeadLine,null,"Права доступа"),n.createElement(M.c,{data:[{renderIcon:()=>n.createElement(j.c.Edit,null),renderLabel:()=>"Редактировать",onChange:e.toggleEditForm}]},n.createElement(w.a,null,n.createElement(j.c.Dots,null)))),Object(p.a)(e.children,e))),B=({model:e,toggleEditForm:a})=>n.createElement("div",{style:{marginBottom:25}},n.createElement(R,{columns:N,withPagination:!1,data:Object(f.a)((e=>{const a=Object.keys(f.b).reduce((e,a)=>Object.assign({},e,{[a]:0}),{});return Object.assign({},a,e.rights,e.reportRights)})(e)),idKey:"idKey",hover:!1,isSortable:!1,toggleEditForm:a})),H=({roleId:e,rights:a,reportRights:t})=>Object(h.c)(d.actions.update(d.ROLE,e,{rights:a,reportRights:t})),Y=Object(M.a)(d.ROLE),I=e=>{var{children:a}=e,t=L(e,["children"]);return n.createElement(k.k,{width:1232},Object(p.a)(a,t))},K=Object(s.b)((e,a)=>({role:Object(d.sel)(d.ROLE).byKey(a.roleId)(e)}))(({role:e,users:a,dispatch:t})=>n.createElement(k.f,null,n.createElement(Y,{id:e.roleId}),n.createElement(m.a,{model:e||{},viewer:B,editor:S.a.contramap(I),onEdit:H}),n.createElement(k.i.Caption,{style:{marginBottom:4}},"Пользователи, которым назначена эта роль"),n.createElement(D,{noun:d.USER.lang.some,roleId:e.roleId})));a.a=class extends u.a{render(){return n.createElement(K,{roleId:this.getParams().roleId})}}},"./src/chapters/access/user/PageUser.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/ramda/index.js")),r=(t.n(o),t("../biz/dist/index.js")),s=(t.n(r),t("./src/layout/index.ts")),i=t("./src/styles/index.ts"),l=t("./src/smart/form/DialogEditFormUC.tsx"),d=t("./src/store/configureStore.tsx"),u=t("./src/chapters/access/user/PersonDataSection.tsx"),c=t("./src/chapters/access/user/PersonRoleSection.tsx"),m=t("./src/chapters/access/user/PersonGroupSection.tsx"),p=t("./src/smart/connectProp.ts"),f=t("./src/chapters/makeSingularAssignView.tsx"),h=t("./src/chapters/adminParts.ts"),_=t("./src/chapters/WellForGroupTabs.tsx"),b=t("./src/layout/Div.tsx");const v=Object(p.a)(Object(f.a)(h.e,r.GROUP),"data",()=>Object(r.sel)(r.GROUP).asMap());class y extends l.a{}const g=i["f"]`
    display: grid;
    grid-gap: 24px;
    grid-template-columns: .54fr .54fr 1fr;
    grid-template-rows: auto 200px;
`(b.a),k=i["f"]`
    grid-area: 1 / 1 / 2 / 3;
`(b.a),j=i["f"]`
    grid-row: 1 / span 2;
    justify-self: stretch;
    align-self: start;
`(b.a),x=Object(p.a)(({user:e})=>n.createElement(s.f,{gap:24},n.createElement(g,null,n.createElement(k,null,n.createElement(l.a,{stretch:!0,model:e,viewer:u.a,onEdit:e=>Object(d.c)(r.actions.update(r.USER,e))})),n.createElement(j,null,n.createElement(s.g,{style:{flexGrow:1}},n.createElement(s.c,{fill:!0,icon:i.c.Well,label:"Доступные скважины"},n.createElement(_.a,{groupId:e.groupId})))),n.createElement(y,{style:{flex:"0 0 50%"},stretch:!0,model:e,withEditButton:!Object(o.isNil)(e.groupId),viewer:({model:e,toggleEditForm:a})=>n.createElement(m.a,Object.assign({},e,{onAdd:a})),editor:e=>n.createElement(v,{value:[e.model.groupId],onChange:a=>e.onValid(Object.assign({},e.model,{groupId:a[0]}))}),onEdit:e=>Object(d.c)(r.actions.update(r.USER,e))}),n.createElement(y,{style:{flex:"0 0 50%"},stretch:!0,model:e,viewer:c.a,onEdit:e=>Object(d.c)(r.actions.update(r.USER,e))}))),"user",r.USER.bySpec);a.a=x},"./src/chapters/access/user/PersonDataSection.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/styled-components/dist/styled-components.es.js")),r=t("./src/styles/SVGLibrary.tsx"),s=t("./src/inputs/Switch.tsx"),i=t("./src/inputs/TextInput.tsx"),l=t("../biz/dist/index.js"),d=(t.n(l),t("./src/smart/Form.ts")),u=t("./src/smart/form/bindInput.ts"),c=t("./src/layout/FormSection.tsx"),m=t("./src/layout/Box.tsx"),p=t("./node_modules/material-ui/Tooltip/index.js"),f=t.n(p);const h=o["a"].div`
    max-width: 828px;
    width: 100%;

    &:hover .hover {
        opacity: 1;
    }

    .personalAvatar {
        width: 120px;
        height: 150px;
        margin
        background-color: #E1E2E1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .hover {
        cursor: pointer;
        position: relative;
        z-index: 1;
        top: 8px;
        right: -64px;
        width: 60px;
        height: 48px;
        border-radius: 0 2px 0 0;
        background-color: rgba(245,245,246,0.7);
        color: #0094CC;
        opacity: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .authorization {
        color: #0094CC;
    }

    .switchLabel {
        color: ${t("./src/styles/colors.ts").c};
        margin-left: -5px;
        font-family: Roboto;
        font-size: 13px;
        line-height: 15px;
        display: flex;
        align-items: center;
    }

    .switchIcon {
        width: 18px;
        height: 18px;
        margin-left: 10px;
        color: #62727B;
    }
`,_=n.createElement("span",null,"Пользователю будет разрешено авторизоваться как на центральном сервере, ",n.createElement("br",null),"так и на буровых. При входе в систему пользователь установит свой пароль"),b=Object(d.a)(l.USER,["login","isMasterUser","firstName","lastName","patrName","email","phone","position","organization","password"]).ap(e=>n.createElement(h,null,n.createElement(m.a,null,n.createElement(c.a,{style:{flex:"0 0 60%"},label:"Персональные данные",icon:r.b.PersonCopy},n.createElement(m.a,null,n.createElement("div",{className:"personalAvatar"},n.createElement(r.b.Photo,{style:{opacity:.5}})),n.createElement("div",{className:"personalName"},n.createElement(i.a,Object.assign({label:"Фамилия"},Object(u.b)("lastName")(e))),n.createElement(i.a,Object.assign({label:"Имя"},Object(u.b)("firstName")(e))),n.createElement(i.a,Object.assign({label:"Отчество"},Object(u.b)("patrName")(e)))))),n.createElement(c.a,{style:{flex:"0 0 40%"},label:"Данные для входа",icon:r.b.Googblue},n.createElement(i.a,Object.assign({label:"Логин"},Object(u.b)("login")(e))),n.createElement(i.a,{label:"Пароль",value:"*".repeat(8)}),n.createElement(f.a,{title:_},n.createElement("div",{className:"itemContainer authorize"},n.createElement(s.a,{label:n.createElement("div",{className:"switchLabel"},"Авторизация на сервере",n.createElement(r.b.Help,{className:"switchIcon"})),disabledClassName:"authorization",defaultChecked:e.model.isMasterUser}))))),n.createElement(m.a,null,n.createElement(c.a,{label:"Рабочие данные",icon:r.b.Work,style:{flex:"0 0 60%"}},n.createElement(i.a,Object.assign({label:"Организация"},Object(u.b)("organization")(e))),n.createElement(i.a,Object.assign({label:"Должность"},Object(u.b)("position")(e)))),n.createElement(c.a,{label:"Контактные данныее",icon:r.b.Phone,style:{flex:"0 0 40%"}},n.createElement(i.a,Object.assign({label:"Email"},Object(u.b)("email")(e))),n.createElement(i.a,Object.assign({label:"Телефон"},Object(u.b)("phone")(e)))))));a.a=b},"./src/chapters/access/user/PersonGroupSection.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/react-redux/es/index.js")),r=t("../biz/dist/index.js"),s=(t.n(r),t("./src/layout/index.ts")),i=t("./src/styles/index.ts"),l=t("./src/smart/caseRender.ts"),d=t("./src/controls/index.ts"),u=t("./src/controls/AdminItemToolbar.tsx"),c=t("./src/app/nav.tsx");const m=i["f"]`
    &:hover {
        color: ${i.e.DEEP_BLUE} !important;
        text-decoration: underline;
        cursor: pointer;
    }
`(s.h),p=i.b.subheading()(m),f=i.b.caption()(s.a),h=i["f"]`
    justify-content: space-between;
    align-items: center;
`(s.d),_=i["f"]`
    margin: 0;
`(u.a),b=i["f"]`
    margin-right: 10px;
    width: 16px !important;
    height: 16px !important;
    color: ${i.e.DISABLED_GRAY} !important;
`(i.c.Message),v=i.b.caption2(i["f"]`
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
`)(s.a),y=Object(o.b)((e,{groupId:a})=>({userGroup:Object(r.sel)(r.GROUP).byKey(a)(e)}))(({userGroup:e})=>n.createElement(s.c,{gap:10,stretch:!0,label:"Группа",icon:i.c.UserGroups},n.createElement(h,{gap:24},n.createElement(d.e,{decoration:!1,push:!0,to:c.a.app.access.userGroup.index.get(e)},n.createElement(p,null,r.GROUP.getFullName(e)())),n.createElement(_,{creationDate:e.creationDate,creatorUserId:e.creatorUserId})),e.comment&&n.createElement(v,null,n.createElement(b,null),n.createElement("span",null,e.comment))));a.a=Object(l.a)(y).isNilOrEmpty("groupId",({userId:e,onAdd:a})=>n.createElement(s.c,{stretch:!0,label:"Пользователь не в группе",icon:i.c.UserGroups},n.createElement(s.k,{gap:24,style:{alignItems:"center"}},n.createElement(f,null,"Пользователь не состоит в группе. Добавьте пользователя в группу"),n.createElement(d.d,{staticPosition:!0,onClick:()=>a&&a()},n.createElement(i.c.Add,null)))))},"./src/chapters/access/user/PersonRoleSection.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/styles/index.ts")),r=t("../biz/dist/index.js"),s=(t.n(r),t("./src/smart/Form.ts")),i=t("./src/layout/index.ts"),l=t("./src/roles/RoleboxExtended/RoleBoxExtended.tsx");a.a=Object(s.a)(r.USER,["roleIds"]).of(e=>n.createElement(i.c,{label:"Роли",icon:o.c.PersonCopy},n.createElement(l.a,{values:e.model.roleIds||[],onChange:a=>e.onChange({property:"roleIds",value:a})})))},"./src/chapters/adminParts.ts":function(e,a,t){"use strict";var n=t("./src/grids/list/List.tsx"),o=t("../biz/dist/index.js"),r=(t.n(o),t("./src/smart/props.ts")),s=t("./src/store/configureStore.tsx"),i=t("./node_modules/react-router-redux/es/index.js"),l=t("./src/app/nav.tsx"),d=t("./src/grids/grid/Grid.tsx"),u=t("./src/chapters/chapteWells/wells/ColumnsWells.tsx"),c=t("./src/grids/grid/columns.ts"),m=t("./src/chapters/access/ColumnsUser.tsx"),p=t("./src/chapters/access/ColumnsGroup.tsx"),f=t("./src/grids/grid/pureGrid.ts"),h=t("./src/chapters/access/ColumnsRole.tsx");const _=Object(r.a)(Object(n.a)(o.WELL)).defaultProp("onRowClick",e=>Object(s.c)(Object(i.c)(l.a.app.chapterWells.well.index.get(e))));a.h=_;const b=Object(r.a)(Object(n.a)(o.PROJECT)).defaultProp("onRowClick",e=>Object(s.c)(Object(i.c)(l.a.app.chapterWells.project.index.get(e))));a.b=b;const v=Object(r.a)(Object(f.a)(o.PROJECT,["name","creatorUserId","creationDate","comment"])).defaultProp("onRowClick",e=>Object(s.c)(Object(i.c)(l.a.app.chapterWells.project.index.get(e))));a.a=v;const y=Object(r.a)(Object(n.a)(o.USER)).defaultProp("onRowClick",e=>Object(s.c)(Object(i.c)(l.a.app.access.user.index.get(e))));a.f=y;const g=Object(r.a)(Object(d.b)(m.a)).defaultProp("onRowClick",e=>Object(s.c)(Object(i.c)(l.a.app.access.user.index.get(e))));a.d=g;const k=Object(r.a)(Object(d.b)(Object(c.a)(o.WELL).create(u.a))).defaultProp("onRowClick",e=>Object(s.c)(Object(i.c)(l.a.app.chapterWells.well.index.get(e))));a.g=k;const j=Object(r.a)(Object(d.b)(Object(c.a)(o.GROUP).create(p.a))).defaultProp("onRowClick",e=>Object(s.c)(Object(i.c)(l.a.app.access.userGroup.index.get(e)))).connectProp("users",o.USER.asMap);a.e=j;Object(r.a)(Object(n.a)(o.GROUP)).defaultProp("onRowClick",e=>Object(s.c)(Object(i.c)(l.a.app.access.userGroup.index.get(e)))).connectProp("users",o.USER.asMap);const x=Object(r.a)(Object(d.b)(Object(c.a)(o.ROLE).create(h.a))).defaultProp("onRowClick",e=>Object(s.c)(Object(i.c)(l.a.app.access.role.index.get(e)))).connectProp("users",o.USER.asMap);a.c=x},"./src/chapters/chapteWells/ChapterWells.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/app/nav.tsx")),r=t("./src/layout/index.ts"),s=t("./src/inputs/index.ts"),i=t("./node_modules/moment/moment.js");t.n(i);a.a=(e=>n.createElement(s.e,Object.assign({label:"Тип дислокации *",options:[{value:"1",label:"Морская"},{value:"0",label:"Наземная"}]},e)));const l=({wellLicenseArea:e,model:{wellLicenseAreaId:a}})=>a?i(e[a].expirationDate).format("DD.MM.YYYY"):"ДД.ММ.ГГГ";a.c=l;a.b=Object(r.j)(()=>[o.a.app.chapterWells.wells.index,o.a.app.chapterWells.projects.index])},"./src/chapters/chapteWells/createProject/StepWellProjectName.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/smart/Form.ts")),r=t("./src/layout/Paper.tsx"),s=t("./src/styles/Typography.tsx"),i=t("./src/smart/form/bindInput.ts"),l=t("./src/layout/Box.tsx"),d=t("./src/inputs/TextInput.tsx"),u=t("../biz/dist/index.js");t.n(u);a.a=Object(o.a)(u.PROJECT,["name"]).ap(e=>n.createElement("div",null,n.createElement(r.a,{style:{padding:"32px",width:"600px",marginBottom:"30px"}},n.createElement(s.Subheading,null,"Назовите групппу скважин"),n.createElement(l.a,null,n.createElement(d.a,Object.assign({label:"Название группы скважин"},Object(i.b)("name")(e)))))))},"./src/chapters/chapteWells/createProject/WizardWellProject.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/wizard/Wizard.tsx")),r=t("./src/store/configureStore.tsx"),s=t("../biz/dist/index.js"),i=(t.n(s),t("./src/controls/AlertDialog.tsx")),l=t("./node_modules/react-router-redux/es/index.js"),d=t("./src/app/nav.tsx"),u=t("./src/store/getFrontendStore.ts"),c=t("./src/store/ui.ts");const m=[{component:t("./src/chapters/chapteWells/createProject/StepWellProjectName.tsx").a}],p={};a.a=class extends n.Component{constructor(e){super(e),this.onWizardComplete=(e=>{const{payload:a}=Object(r.c)(s.actions.create(s.PROJECT,e));this.setState({projectId:a.id,isOpen:!0})}),this.onAlertOk=(()=>Object(r.c)(Object(l.d)(d.a.app.chapterWells.assignProject.index.get({projectId:this.state.projectId})))),this.onAlertCancel=(()=>Object(r.c)(Object(l.b)())),this.state={}}render(){return n.createElement("div",null,n.createElement(o.a,{model:p,steps:m,disableStepLine:!0,onComplete:this.onWizardComplete,onExit:()=>Object(u.a)().dispatch(c.a.confirmDialog({action:Object(l.b)(),title:"Отмена создания группы скважины",text:"Вы действительно хотите отменить создание новой группы скважин",cancelText:"Нет",submitText:"Отменить"}))}),n.createElement(i.a,{open:this.state.isOpen,title:"Группа создана",text:"Вы хотите добавить скважины в новую группу?",okText:"Добавить",cancelText:"Позже",onOk:this.onAlertOk,onCancel:this.onAlertCancel}))}}},"./src/chapters/chapteWells/createWell/CreateWellStep.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/Card.tsx")),r=t("./src/styles/restyle.ts"),s=t("./src/inputs/TextInput.tsx"),i=t("./src/layout/Box.tsx"),l=t("./src/smart/form/bindInput.ts"),d=t("./src/layout/Avatar.tsx"),u=t("./src/smart/Form.ts"),c=t("../biz/dist/index.js"),m=(t.n(c),t("./src/inputs/RefInput.tsx")),p=t("../utils/dist/index.js"),f=(t.n(p),t("./src/inputs/CoordinatePicker.tsx")),h=t("./src/chapters/chapteWells/ChapterWells.tsx");const _=r["a"]`
    width: 828px;
    padding: 0px;
`(o.a),b=Object(u.a)(c.WELL,["basing","startDate","wellLicenseAreaId","wellFieldId","wellPlaceId","wellPurposeId","wellStatusId","number","coordinates"]).connect(({biz:{wellLicenseArea:e,wellField:a,wellPlace:t,wellPurpose:n,wellStatus:o}})=>({wellLicenseArea:e,wellField:a,wellPlace:t,wellPurpose:n,wellStatus:o}));a.a=b.ap(Object(p.debug)(e=>n.createElement(_,null,n.createElement(i.b,{gap:20,style:{padding:"32px 24px 28px"}},n.createElement(i.a,{gap:24},n.createElement(d.a,{width:240,height:140}),n.createElement(i.b,{stretch:!0,gap:10},n.createElement(m.a,Object.assign({label:"Лицензионный участок"},Object(l.b)("wellLicenseAreaId")(e))),n.createElement(h.a,Object.assign({},Object(l.b)("basing")(e))))),n.createElement(i.a,{gap:24},n.createElement(m.a,Object.assign({label:"Месторождение"},Object(l.b)("wellFieldId")(Object.assign({helperText:"Заполните поле Месторождение или Площадь"},e)))),n.createElement(m.a,Object.assign({label:"Площадь"},Object(l.b)("wellPlaceId")(Object.assign({helperText:"Заполните поле Месторождение или Площадь"},e))))),n.createElement(i.a,{gap:24},n.createElement(m.a,Object.assign({label:"Недропользователь (не имплементировано)"},Object(l.b)("wellPlaceId")(e))),n.createElement(i.a,{stretch:!0,gap:25},n.createElement(s.a,Object.assign({label:"Номер скважины"},Object(l.b)("number")(e))),n.createElement(s.a,Object.assign({label:"Номер куста"},Object(l.b)("clusterNumber")(e))))),n.createElement(i.a,{gap:24},n.createElement(m.a,Object.assign({label:"Назначение"},Object(l.b)("wellPurposeId")(e))),n.createElement(m.a,Object.assign({label:"Текущий статус"},Object(l.b)("wellStatusId")(e)))),n.createElement(i.b,{gap:24},n.createElement(i.a,{gap:24},n.createElement(f.a,Object.assign({},Object(l.b)("coordinates")(e)))),n.createElement(i.a,{gap:24,width:"25%"},n.createElement(s.a,Object.assign({label:"Альтитуда, м"},Object(l.b)("altitude")(e)))))))))},"./src/chapters/chapteWells/createWell/WizardWell.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/wizard/Wizard.tsx")),r=t("./src/store/configureStore.tsx"),s=t("../biz/dist/index.js"),i=(t.n(s),t("./src/controls/AlertDialog.tsx")),l=t("./node_modules/react-router-redux/es/index.js"),d=t("./src/app/nav.tsx"),u=t("./src/chapters/chapteWells/createWell/CreateWellStep.tsx"),c=t("./src/store/ui.ts");const m=[{component:u.a}],p={};a.a=class extends n.Component{constructor(e){super(e),this.onWizardComplete=(e=>{const{payload:a}=Object(r.c)(s.actions.create(s.WELL,e));this.setState({wellId:a.id,isOpen:!0})}),this.onAlertOk=(()=>Object(r.c)(Object(l.d)(d.a.app.chapterWells.projects.index.path))),this.onAlertCancel=(()=>Object(r.c)(Object(l.b)())),this.state={}}render(){return n.createElement("div",null,n.createElement(o.a,{model:p,steps:m,disableStepLine:!0,onComplete:this.onWizardComplete,onExit:()=>Object(r.c)(c.a.confirmDialog({action:Object(l.b)(),title:"Отмена создания группы скважин",text:"Вы действительно хотите отменить создание новой группы скважины",cancelText:"Нет",submitText:"Отменить"}))}),n.createElement(i.a,{open:this.state.isOpen,title:"Группа создана",text:"Скважина создана успешно. Хотите добавить скважину в группу?",okText:"Добавить",cancelText:"Позже",onOk:this.onAlertOk,onCancel:this.onAlertCancel}))}}},"./src/chapters/chapteWells/projects/PageAssignWellProject.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/smart/Stateful.ts")),r=t("./node_modules/react-router-redux/es/index.js"),s=t("./src/layout/Span.tsx"),i=t("./src/app/nav.tsx"),l=t("./src/store/getFrontendStore.ts"),d=t("./src/layout/PageLayout.tsx"),u=t("./src/styles/Typography.tsx"),c=t("./src/store/configureStore.tsx"),m=t("../biz/dist/index.js"),p=(t.n(m),t("./src/layout/Box.tsx")),f=t("./src/controls/index.ts"),h=t("./src/grids/SmartToolbar.tsx"),_=t("./src/layout/index.ts"),b=t("./src/grids/pureTree.ts"),v=t("./src/chapters/adminParts.ts");const y=Object(h.c)(),g=Object(b.a)(m.WELL).ap(e=>n.createElement(_.g,null,n.createElement(y,Object.assign({},e),({value:e})=>e&&e.length?`Выбрано ${Object(m.pluralize)(m.WELL)(e.length)}`:"Скважины"),n.createElement(v.g,Object.assign({},e)))).connect((e,a)=>({data:m.WELL.asList(e=>e.projectId!==a.projectId)(e)}));a.a=class extends o.a{constructor(){super(...arguments),this.onAssign=(()=>{const{projectId:e}=this.props.match.params;((e,a,t=[])=>Object(c.c)(m.actions.populate(m.WELL,{projectId:e},t)))(e,Object(l.a)().getState(),this.state.wellIds),Object(c.c)(Object(r.d)(i.a.app.chapterWells.project.index.get({projectId:e})))}),this.onCancel=(()=>Object(c.c)(Object(r.d)(i.a.app.chapterWells.projects.index.path)))}render(){const e=this.props.match.params.projectId,a=Object(m.sel)(m.PROJECT).byKey(e)(Object(l.a)().getState()),t=this.state.wellIds||[];return n.createElement(d.a,null,n.createElement(u.Title,null,"Назначение группы скавжин"),n.createElement("br",null),n.createElement(s.a.Caption2,null,"Выбранным скважинам будет назначена группа ",a.name),n.createElement(g,{mode:"multiSelect",projectId:e,idKey:"wellId",value:t,onChange:e=>this.setState({wellIds:e})}),n.createElement(p.a,{reversed:!0},n.createElement(f.b,{disabled:!this.state.wellIds||!this.state.wellIds.length,onClick:this.onAssign},"Назначить группу"),n.createElement(f.b,{onClick:this.onCancel},"Отмена")))}}},"./src/chapters/chapteWells/projects/PageProject.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/smart/RoutedPage.ts")),r=t("./src/layout/index.ts"),s=t("../biz/dist/index.js"),i=(t.n(s),t("./src/smart/props.ts")),l=t("./src/chapters/adminParts.ts"),d=t("./src/grids/pureTree.ts"),u=t("./src/grids/SmartToolbar.tsx"),c=t("./src/layout/Paper.tsx"),m=t("./src/store/configureStore.tsx"),p=t("./node_modules/react-router-redux/es/index.js"),f=t("./src/app/nav.tsx"),h=t("./src/grids/Expandable.ts"),_=t("./node_modules/ramda/index.js"),b=(t.n(_),t("./src/smart/caseRender.ts")),v=t("./src/layout/CenteredCaption.tsx"),y=t("./src/controls/AdminItemToolbar.tsx");const g=Object(u.b)(),k=Object(b.a)(l.g).isNilOrEmpty("data",Object(v.a)("В проекте нет ни одной скважины")),j=Object(d.a)(s.WELL).ap(e=>n.createElement(c.a,null,n.createElement(g,Object.assign({},e,{title:"Скважины",onSelectionCancel:()=>e.onModeChange(h.b.VIEW),onSelectionSubmit:a=>{((e,a)=>{const t=Object(s.sel)(s.WELL).asKeys(a=>a.projectId===e)(),n=_.intersection(t,a);Object(m.c)(s.actions.populate(s.WELL,{projectId:null},n))})(e.projectId,a),e.onModeChange(h.b.VIEW)}})),n.createElement(k,Object.assign({},e,{idKey:"wellId"})))),x=Object(i.a)(j).connectProp("data",e=>s.WELL.asList(a=>a.projectId===e.projectId)),w=Object(y.b)(s.PROJECT);a.a=class extends o.a{constructor(){super(...arguments),this.onAdd=(()=>Object(m.c)(Object(p.c)(f.a.app.chapterWells.assignProject.index.get(this.getParams()))))}render(){const{projectId:e}=this.getParams();return n.createElement(r.f,null,n.createElement(w,{id:e}),n.createElement(x,{projectId:e,onRequestAdd:this.onAdd}))}}},"./src/chapters/chapteWells/projects/PageProjectsList.tsx":function(e,a,t){"use strict";var n=t("./src/smart/props.ts"),o=t("./node_modules/react/index.js"),r=(t.n(o),t("./src/controls/Fab.tsx")),s=t("./src/styles/SVGLibrary.tsx"),i=t("./src/app/nav.tsx"),l=t("../biz/dist/index.js"),d=(t.n(l),t("./src/grids/grid/gridElements.tsx")),u=t("./src/store/configureStore.tsx"),c=t("./node_modules/react-router-redux/es/index.js"),m=t("./src/grids/grid/pureGrid.ts");const p=Object(m.a)(l.PROJECT,["name","creatorUserId","creationDate","comment"]).contramap(d.a),f=Object(n.a)(p).connectProp("data",l.PROJECT.asMap);a.a=(()=>o.createElement("div",null,o.createElement(f,{title:"Группы скважин",onRowClick:e=>Object(u.c)(Object(c.c)(i.a.app.chapterWells.project.index.get(e)))}),o.createElement(r.a,{link:i.a.app.chapterWells.addWellProject.index.path},o.createElement(s.a.Add,null))))},"./src/chapters/chapteWells/wells/ColumnsWells.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/moment/moment.js")),r=(t.n(o),t("./src/grids/grid/Grid.tsx")),s=t("./src/layout/Span.tsx"),i=t("../biz/dist/index.js"),l=(t.n(i),t("./src/grids/grid/gridHelpers.ts")),d=t("./src/styles/SVGLibrary.tsx"),u=t("./src/controls/IconButton.tsx"),c=t("./src/controls/SearchMatch.tsx");const m=[{title:"",dataIndex:"removed",classNames:r.a.cellClasses.icon,render:(e,a)=>n.createElement(d.b.Well,{fill:"#757575"})},{title:"Наименование",dataIndex:"wellId",classNames:r.a.cellClasses.leftAlign,render:(e,a)=>Object(i.sel)(i.WELL).getFullName(a)()},Object(l.a)(i.WELL)("wellStatusId"),{title:"Дата начала",dataIndex:"startDate",render:e=>n.createElement(s.a.Caption,null,n.createElement(c.a,null,e?o(e).format("LL"):"неизвестно"))},{title:"",dataIndex:"clusterNumber",classNames:r.a.cellClasses.icon,render:(e,a)=>n.createElement(u.a,{onClick:e=>{e.stopPropagation(),alert(`click on ${a.wellId}`)}},n.createElement(d.b.Dots,null))}];a.a=m},"./src/chapters/chapteWells/wells/PageWellDetails.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/react-redux/es/index.js")),r=t("./node_modules/ramda/index.js"),s=(t.n(r),t("../biz/dist/index.js")),i=(t.n(s),t("./src/smart/RoutedPage.ts")),l=t("./src/layout/index.ts"),d=t("./src/smart/form/DialogEditFormUC.tsx"),u=t("./src/store/configureStore.tsx"),c=t("./src/chapters/chapteWells/wells/WellDataSection.tsx"),m=t("./src/chapters/chapteWells/wells/WellGroupSection.tsx"),p=t("./src/styles/index.ts"),f=t("./src/controls/AdminItemToolbar.tsx"),h=t("./src/smart/connectProp.ts"),_=t("./src/chapters/adminParts.ts"),b=t("./src/chapters/makeSingularAssignView.tsx");const v=Object(f.b)(s.WELL),y=Object(h.a)(Object(b.a)(_.a,s.PROJECT),"data",e=>s.PROJECT.asMap());class g extends d.a{}const k=Object(h.a)(_.f,"data",e=>s.selectors.users.byWell(e)),j=Object(o.b)((e,a)=>({well:s.WELL.byKey(a.wellId)(e),wellField:s.WELL_FIELD.asMap()(e),wellPlace:s.WELL_PLACE.asMap()(e),project:s.PROJECT.asList()(e)}))(({wellField:e,wellPlace:a,well:t})=>n.createElement(l.f,null,n.createElement(v,{id:t.wellId,removeIsHidden:!0}),n.createElement(l.d,{gap:24,style:{alignItems:"stretch"}},n.createElement(d.a,{stretch:!0,model:t,viewer:c.a,onEdit:e=>Object(u.c)(s.actions.update(s.WELL,e))}),n.createElement(l.k,{stretch:!0,gap:24},n.createElement(g,{stretch:!0,model:t,withEditButton:!Object(r.isNil)(t.projectId),viewer:({model:e,toggleEditForm:a})=>n.createElement(m.a,Object.assign({},e,{onAdd:a})),editor:e=>n.createElement(y,{value:[e.model.projectId],onChange:a=>e.onValid(Object.assign({},e.model,{projectId:a[0]}))}),onEdit:e=>Object(u.c)(s.actions.update(s.WELL,e))}),n.createElement(l.g,null,n.createElement(l.c,{fill:!0,icon:p.c.Visible,label:"Пользователи и группы пользователей, которые имеют доступ к скважине"},n.createElement(k,{height:494,wellId:t.wellId,withPagination:!1})))))));a.a=class extends i.a{render(){return n.createElement(j,{wellId:this.getParams().wellId})}}},"./src/chapters/chapteWells/wells/PageWellsList.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/react-redux/es/index.js")),r=t("./node_modules/ramda/index.js"),s=(t.n(r),t("./node_modules/react-router-redux/es/index.js")),i=t("./src/controls/Fab.tsx"),l=t("./src/styles/SVGLibrary.tsx"),d=t("./src/app/nav.tsx"),u=t("./src/layout/PageLayout.tsx"),c=t("./src/grids/grid/Grid.tsx"),m=t("./src/smart/Pure.ts"),p=t("./src/grids/grid/gridHelpers.ts"),f=t("./src/grids/grid/gridElements.tsx"),h=t("./src/store/configureStore.tsx"),_=t("./src/chapters/chapteWells/wells/ColumnsWells.tsx"),b=t("../biz/dist/index.js"),v=(t.n(b),t("./src/controls/GroupingControl.tsx")),y=t("./node_modules/styled-components/dist/styled-components.es.js"),g=t("./src/layout/Div.tsx"),k=t("../utils/dist/index.js"),j=(t.n(k),t("./src/styles/colors.ts")),x=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)a.indexOf(n[o])<0&&(t[n[o]]=e[n[o]])}return t};const w=Object(m.a)().of(Object(c.b)(_.a)).contramap(Object(f.b)()),M=Object(y["a"])(g["a"])`
    background-color: white;
    padding: 15px 0;
    border-bottom: 1px solid ${j.m.BORDER_GRAY};
`;a.a=Object(o.b)(e=>Object.assign({wellLicenseAreaId:b.WELL_LICENSE_AREA.asMap()(e),wellFieldId:b.WELL_FIELD.asMap()(e),projectId:b.PROJECT.asMap()(e)},Object(p.b)(b.WELL)(e)))(class extends n.Component{constructor(e){super(e),this.setSortingRule=(e=>this.setState({currentRuleIndex:e||null})),this.renderGrid=((e="Скважины",a)=>(t,o=0)=>{let r=e;if(a){const{key:e}=a;r=Object(k.toIndexedArray)(this.props[e]).find(a=>t.some(t=>t[e]===a[e])).name}return n.createElement(w,{key:o,headerProps:{title:r,itemsCount:Object(b.pluralize)(b.WELL)(t.length)},data:t,idKey:b.WELL.uniqueProperty,withPagination:!1,onRowClick:e=>Object(h.c)(Object(s.c)(d.a.app.chapterWells.well.index.get(e)))})}),this.renderGroupedWells=(e=>{const{data:a}=this.props,t=Object(r.groupBy)(Object(r.prop)(e.key))(Object(k.toIndexedArray)(a)),{undefined:n}=t,o=x(t,["undefined"]),s=Object(k.toIndexedArray)(o).map(this.renderGrid("",e));return n&&s.push(this.renderGrid("Другие")(n,s.length)),s}),this.renderWells=(()=>{const{data:e}=this.props,{currentRuleIndex:a}=this.state,t=this.sortingRules[a];return t?this.renderGroupedWells(t):this.renderGrid()(Object(k.toIndexedArray)(e))}),this.sortingRules=[{key:"wellFieldId",label:"Месторождения"},{key:"wellLicenseAreaId",label:"Лицензионные участки"}],this.state={currentRuleIndex:"0"}}render(){return n.createElement("div",null,n.createElement(M,null,n.createElement(u.a,{style:{padding:0}},n.createElement(v.a,{value:this.state.currentRuleIndex,data:this.sortingRules.map(e=>e.label),onChange:this.setSortingRule}))),n.createElement(u.a,null,this.renderWells(),n.createElement(i.a,{link:d.a.app.chapterWells.addWell.index.path},n.createElement(l.a.Add,null))))}})},"./src/chapters/chapteWells/wells/WellDataSection.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("../biz/dist/index.js")),r=(t.n(o),t("./src/smart/Form.ts")),s=t("./src/smart/form/bindInput.ts"),i=t("./src/layout/index.ts"),l=t("./src/inputs/index.ts"),d=t("../utils/dist/index.js"),u=(t.n(d),t("./src/chapters/chapteWells/ChapterWells.tsx")),c=t("./src/inputs/InputReadonly.tsx");a.a=Object(r.a)(o.WELL,["wellFieldId","wellPlaceId","wellPurposeId","wellStatusId","wellLicenseAreaId","startDate","clusterNumber","basing","number"]).connect(e=>({wellLicenseArea:o.WELL_LICENSE_AREA.asMap()(e),wellField:o.WELL_FIELD.asMap()(e),wellPlace:o.WELL_PLACE.asMap()(e),wellPurpose:o.WELL_PURPOSE.asMap()(e),wellStatus:o.WELL_STATUS.asMap()(e)})).ap(Object(d.debug)(e=>n.createElement(i.k,null,n.createElement(i.c,{label:"Основные данные"},n.createElement(i.d,{gap:24},n.createElement(i.k,{stretch:!0},n.createElement(l.f,Object.assign({},Object(s.b)("wellFieldId")(e))),n.createElement(l.f,Object.assign({label:"Недропользователь (не имплементировано)"},Object(s.b)("wellPlaceId")(e)))),n.createElement(i.k,{stretch:!0},n.createElement(l.f,Object.assign({},Object(s.b)("wellPlaceId")(e))),n.createElement(i.d,{gap:24,stretch:!0},n.createElement(i.k,{stretch:!0},n.createElement(l.g,Object.assign({label:"Номер скважины"},Object(s.b)("number")(e)))),n.createElement(i.k,{stretch:!0},n.createElement(l.g,Object.assign({label:"Номер куста"},Object(s.b)("clusterNumber")(e)))))))),n.createElement(i.c,{label:"Статус и назначение"},n.createElement(i.d,{gap:24},n.createElement(i.k,{stretch:!0},n.createElement(l.f,Object.assign({},Object(s.b)("wellPurposeId")(e))),n.createElement(u.a,Object.assign({},Object(s.b)("basing")(e)))),n.createElement(i.k,{stretch:!0},n.createElement(l.f,Object.assign({},Object(s.b)("wellStatusId")(e)))))),n.createElement(i.c,{label:"Лицензия"},n.createElement(i.d,{gap:24,stretch:!0},n.createElement(i.k,{stretch:!0},n.createElement(l.f,Object.assign({},Object(s.b)("wellLicenseAreaId")(e)))),n.createElement(i.k,{stretch:!0},n.createElement(c.a,null,"Окончание лицензии",n.createElement(c.b,null,Object(u.c)(e)))))),n.createElement(i.c,{gap:24,label:"Координаты устья"},n.createElement(i.d,{gap:24,stretch:!0},n.createElement(l.a,Object.assign({},Object(s.b)("coordinates")(e)))),n.createElement(i.d,{gap:24,width:"25%"},n.createElement(l.b,Object.assign({label:"Альтитуда, м"},Object(s.b)("altitude")(e))))))))},"./src/chapters/chapteWells/wells/WellGroupSection.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("../biz/dist/index.js")),r=(t.n(o),t("./src/layout/index.ts")),s=t("./src/styles/index.ts"),i=t("./node_modules/react-redux/es/index.js"),l=t("./src/smart/caseRender.ts"),d=t("./src/controls/index.ts"),u=t("./src/controls/AdminItemToolbar.tsx"),c=t("./src/app/nav.tsx"),m=t("./src/controls/Link.tsx");const p=s["f"]`
    &:hover {
        color: ${s.e.DEEP_BLUE} !important;
        text-decoration: underline;
        cursor: pointer;
    }
`(r.h),f=s.b.subheading()(p),h=s.b.caption()(r.a),_=s["f"]`
    justify-content: space-between;
    align-items: center;
`(r.d),b=s["f"]`
    margin: 0;
`(u.a),v=s["f"]`
    margin-right: 10px;
    width: 16px !important;
    height: 16px !important;
    color: ${s.e.DISABLED_GRAY} !important;
`(s.c.Message),y=s.b.caption2(s["f"]`
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
`)(r.a),g=Object(i.b)((e,{projectId:a})=>({project:o.PROJECT.byKey(a)(e)}))(({project:e})=>n.createElement(r.c,{gap:10,stretch:!0,label:"Скважина включена в группу"},n.createElement(_,{gap:24},n.createElement(m.a,{decoration:!1,push:!0,to:c.a.app.chapterWells.project.index.get(e)},n.createElement(f,null,Object(o.sel)(o.PROJECT).getFullName(e)())),n.createElement(b,{creationDate:e.creationDate,creatorUserId:e.creatorUserId})),e.comment&&n.createElement(y,null,n.createElement(v,null),n.createElement("span",null,e.comment))));a.a=Object(l.a)(g).isNilOrEmpty("projectId",({wellId:e,onAdd:a})=>n.createElement(r.c,{stretch:!0,label:"Скважина не в группе"},n.createElement(r.k,{gap:24,style:{alignItems:"center"}},n.createElement(h,null,"Скважина не состоит в группе. Добавьте скважину в группу"),n.createElement(d.d,{staticPosition:!0,onClick:()=>a&&a()},n.createElement(s.c.Add,null)))))},"./src/chapters/chapteWells/wellsNav.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/chapters/chapteWells/projects/PageAssignWellProject.tsx")),r=t("./src/chapters/chapteWells/ChapterWells.tsx"),s=t("./src/chapters/chapteWells/createWell/WizardWell.tsx"),i=t("./src/chapters/chapteWells/createProject/WizardWellProject.tsx"),l=t("./src/chapters/chapteWells/wells/PageWellDetails.tsx"),d=t("./src/chapters/chapteWells/wells/PageWellsList.tsx"),u=t("./src/chapters/chapteWells/projects/PageProject.tsx"),c=t("./src/chapters/chapteWells/projects/PageProjectsList.tsx"),m=t("../biz/dist/index.js"),p=(t.n(m),t("./src/styles/SVGLibrary.tsx"));const f={index:{component:d.a,path:"/app/chapterWells/wells",title:"Управление скважинами",label:"Скважины"}},h={index:{component:l.a,path:"/app/chapterWells/well/:wellId",get:e=>"/app/chapterWells/well/"+e.wellId,title:({wellId:e})=>{const a=Object(m.sel)(m.WELL).byKey(e)();return Object(m.sel)(m.WELL).getFullName(a)()}}},_={index:{component:s.a,path:"/app/chapterWells/addWell",title:"Создание новой скважины"}},b={index:{component:u.a,path:"/app/chapterWells/project/:projectId",get:e=>"/app/chapterWells/project/"+e.projectId,title:({projectId:e})=>"Группа скважин "+Object(m.sel)(m.PROJECT).getFullName(e)()}},v={index:{component:i.a,path:"/app/chapterWells/addWellProject",title:"Новая группа скважин"}},y={index:{component:c.a,path:"/app/chapterWells/projectsList",title:"Скважины",label:"Группы скважин"}},g={index:{path:"/app/chapterWells/assignProject/:projectId",get:e=>"/app/chapterWells/assignProject/"+e.projectId,title:"Добавление скважин в группу",component:o.a}};a.a={index:{component:r.b,path:"/app/chapterWells",icon:n.createElement(p.b.Well,null),label:"Скважины",innerIndex:"/app/chapterWells/wells",title:"Управление скважинами"},wells:f,well:h,projects:y,addWell:_,project:b,addWellProject:v,assignProject:g}},"./src/chapters/chapterDrillRigs/chapterDrillRigs.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/controls/TabsRouted.tsx")),r=t("./src/smart/RoutedPage.ts"),s=t("./src/inputs/RadioGroup.tsx"),i=t("./src/smart/form/bindInput.ts");a.a=(e=>n.createElement(s.a,Object.assign({label:"БЦК",options:[{value:"1",label:"Да"},{value:"0",label:"Нет"}]},Object(i.b)("drillingCementComplex")(e)))),a.b=class extends r.a{render(){const e=[].find(e=>e.path===this.props.location.pathname);return n.createElement("div",null,e&&n.createElement(o.a,{tabs:[]}),this.renderChildRoutes())}}},"./src/chapters/chapterDrillRigs/createDrillRig/CreateDrillRigStep.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/Card.tsx")),r=t("./src/styles/restyle.ts"),s=t("./src/inputs/TextInput.tsx"),i=t("./src/layout/Box.tsx"),l=t("./src/smart/form/bindInput.ts"),d=t("./src/layout/Avatar.tsx"),u=t("./src/smart/Form.ts"),c=t("../biz/dist/index.js"),m=(t.n(c),t("./src/inputs/RefInput.tsx")),p=t("./src/inputs/Select.tsx"),f=t("./src/layout/FormSection.tsx"),h=t("../utils/dist/index.js"),_=(t.n(h),t("./src/chapters/chapterDrillRigs/chapterDrillRigs.tsx"));const b=r["a"]`
    width: 828px;
    padding: 0px;
`(o.a),v=Object(u.a)(c.DRILL_RIG,["name","serialNumber","capacity","manufacturer","productionYear","ownerId","typeId","drillingCementComplex","rigWinchTypeId"]).connect(({biz:{drillRigOwner:e,drillRigType:a}})=>({drillRigOwner:e,drillRigType:a})),y=Object(h.getYearsFromSomeToCurrent)(),g=r["a"]`
    justify-content: center;
    flex: 0 0 120px;
`(i.b);a.a=v.of(e=>n.createElement(b,{style:{maxWidth:700}},n.createElement(f.a,{label:"Основные данные",stretch:!0},n.createElement(i.a,{gap:24},n.createElement(d.a,{width:150,height:200}),n.createElement(i.b,{stretch:!0,gap:10},n.createElement(s.a,Object.assign({label:"Название буровой установки"},Object(l.b)("name")(e))),n.createElement(m.a,Object.assign({label:"Тип буровой установки"},Object(l.b)("typeId")(e))),n.createElement(m.a,Object.assign({label:"Владелец буровой установки"},Object(l.b)("ownerId")(e)))),n.createElement(g,null,n.createElement(s.a,Object.assign({type:"number",label:"Грузопод... т"},Object(l.b)("capacity")(e)))))),n.createElement(f.a,{label:"Производитель"},n.createElement(i.a,{gap:24},n.createElement(i.b,{gap:20,style:{flex:"0 0 320px"}},n.createElement(s.a,Object.assign({label:"Производитель"},Object(l.b)("manufacturer")(e))),n.createElement(s.a,Object.assign({label:"Серийный номер"},Object(l.b)("serialNumber")(e)))),n.createElement(i.b,{style:{flex:"0 0 136px"}},n.createElement(p.a,Object.assign({},Object(l.b)("productionYear")(e),{label:"Год выпуска",data:y}))))),n.createElement(f.a,{label:"Агрегаты"},n.createElement(i.a,{gap:30},n.createElement("div",{style:{flex:"0 0 320px"}},n.createElement(m.a,Object.assign({label:"Тип буровой лебедки"},Object(l.b)("rigWinchTypeId")(e)))),n.createElement(_.a,Object.assign({},e))))))},"./src/chapters/chapterDrillRigs/createDrillRig/WizardDrillRig.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/react-router-redux/es/index.js")),r=t("./src/app/nav.tsx"),s=t("../biz/dist/index.js"),i=(t.n(s),t("./src/store/configureStore.tsx")),l=t("./src/store/getFrontendStore.ts"),d=t("./src/store/ui.ts"),u=t("./src/wizard/Wizard.tsx"),c=t("./src/controls/AlertDialog.tsx");const m=[{component:t("./src/chapters/chapterDrillRigs/createDrillRig/CreateDrillRigStep.tsx").a}],p={};a.a=class extends n.Component{constructor(e){super(e),this.onWizardComplete=(e=>{const{payload:a}=Object(i.c)(s.actions.create(s.DRILL_RIG,e));this.setState({drillRigId:a.id,isOpen:!0})}),this.onAlertOk=(()=>Object(i.c)(Object(o.d)(r.a.app.chapterDrillRigs.drillRigs.index.path))),this.state={}}render(){return n.createElement("div",null,n.createElement(u.a,{model:p,steps:m,disableStepLine:!0,onComplete:this.onWizardComplete,onExit:()=>Object(l.a)().dispatch(d.a.confirmDialog({action:Object(o.b)(),title:"Отмена создания буровой установки",text:"Вы действительно хотите отменить создание новой буровой установки",cancelText:"Нет",submitText:"Отменить"}))}),n.createElement(c.a,{open:this.state.isOpen,title:"Буровая установка создана",text:"Буровая установка создана успешно.",okText:"Готово",onOk:this.onAlertOk}))}}},"./src/chapters/chapterDrillRigs/drillRig/PageDrillRig.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/react-redux/es/index.js")),r=t("../biz/dist/index.js"),s=(t.n(r),t("./src/layout/PageLayout.tsx")),i=t("./src/store/configureStore.tsx"),l=t("./src/smart/form/DialogEditFormUC.tsx"),d=t("./src/layout/Box.tsx"),u=t("./src/layout/FormSection.tsx"),c=t("./src/inputs/index.ts"),m=t("./src/smart/form/bindInput.ts"),p=t("./src/layout/Avatar.tsx"),f=t("./src/inputs/RefInput.tsx"),h=t("./src/smart/Form.ts"),_=t("../utils/dist/index.js"),b=(t.n(_),t("./src/inputs/Select.tsx")),v=t("./src/chapters/chapterDrillRigs/chapterDrillRigs.tsx"),y=t("./src/styles/restyle.ts");const g=Object(h.a)(r.DRILL_RIG,["name","serialNumber","capacity","manufacturer","productionYear","ownerId","typeId","drillingCementComplex","rigWinchTypeId"]).connect(e=>({drillRigOwner:r.DRILL_RIG_OWNER.asMap()(e),drillRigType:r.DRILL_RIG_TYPE.asMap()(e)})),k=y["a"]`
    flex: 0 0 350px;
`(d.a),j=y["a"]`
    flex: 0 0 350px;
`(d.b),x=g.of(e=>n.createElement("div",{style:{width:"720px"}},n.createElement(u.a,{label:"Основные данные",stretch:!0},n.createElement(d.a,{gap:24},n.createElement(k,{gap:21},n.createElement(p.a,{width:90,height:120}),n.createElement(d.b,{stretch:!0,gap:24},n.createElement(c.g,Object.assign({label:"Название буровой установки"},Object(m.b)("name")(e))),n.createElement(f.a,Object.assign({label:"Тип буровой установки"},Object(m.b)("typeId")(e))))),n.createElement(d.b,{stretch:!0,gap:24},n.createElement(c.g,Object.assign({type:"number",label:"Грузопод... т"},Object(m.b)("capacity")(e))),n.createElement(f.a,Object.assign({label:"Владелец буровой установки"},Object(m.b)("ownerId")(e)))))),n.createElement(u.a,{label:"Производитель",stretch:!0},n.createElement(d.a,{gap:24},n.createElement(j,{width:330,gap:24},n.createElement(c.g,Object.assign({label:"Производитель"},Object(m.b)("manufacturer")(e))),n.createElement(c.g,Object.assign({label:"Серийный номер"},Object(m.b)("serialNumber")(e)))),n.createElement(d.b,{style:{flex:"auto"},gap:24},n.createElement(b.a,Object.assign({},Object(m.b)("productionYear")(e),{label:"Год выпуска",data:Object(_.getYearsFromSomeToCurrent)()}))))),n.createElement(u.a,{label:"Агрегаты",stretch:!0},n.createElement(d.a,{gap:24},n.createElement(j,{style:{flex:"0 0 320px"}},n.createElement(f.a,Object.assign({label:"Тип буровой лебедки"},Object(m.b)("rigWinchTypeId")(e)))),n.createElement(v.a,Object.assign({},e)))))),w=e=>n.createElement(u.a,{label:"Текущий статус",stretch:!0}),M=Object(o.b)((e,a)=>({drillRig:r.DRILL_RIG.byKey(a.drillRigId)(e)}))(e=>n.createElement(s.a,null,n.createElement(d.b,{marginAuto:!0,gap:24},n.createElement(l.a,{stretch:!0,model:e.drillRig,viewer:x,onEdit:e=>Object(i.c)(r.actions.update(r.DRILL_RIG,e))}),n.createElement(l.a,{stretch:!0,model:e.drillRig,viewer:w,onEdit:e=>Object(i.c)(r.actions.update(r.DRILL_RIG,e))}))));a.a=M},"./src/chapters/chapterDrillRigs/drillRigs/ColumnsDrillRigs.tsx":function(e,a,t){"use strict";var n=t("../biz/dist/index.js"),o=(t.n(n),t("./src/grids/grid/gridHelpers.ts"));const r=[{title:"Название",dataIndex:"name"},{title:"Серийный номер",dataIndex:"serialNumber"},Object(o.a)(n.DRILL_RIG)("ownerId"),Object(o.a)(n.DRILL_RIG)("typeId"),{title:"Грузоподъёмность",dataIndex:"capacity",render:e=>`${e} т.`},{title:"Производитель",dataIndex:"manufacturer"},{title:"Год выпуска",dataIndex:"productionYear"}];a.a=r},"./src/chapters/chapterDrillRigs/drillRigs/PageDrillRigsList.tsx":function(e,a,t){"use strict";var n=t("./src/grids/pureTree.ts"),o=t("./node_modules/react/index.js"),r=(t.n(o),t("./src/controls/Fab.tsx")),s=t("./src/styles/SVGLibrary.tsx"),i=t("./src/app/nav.tsx"),l=t("./src/layout/PageLayout.tsx"),d=t("../biz/dist/index.js"),u=(t.n(d),t("./src/grids/grid/Grid.tsx")),c=t("./src/grids/grid/gridHelpers.ts"),m=t("./src/grids/grid/gridElements.tsx"),p=t("./src/store/configureStore.tsx"),f=t("./node_modules/react-router-redux/es/index.js"),h=t("./src/chapters/chapterDrillRigs/drillRigs/ColumnsDrillRigs.tsx");const _=Object(n.a)(d.DRILL_RIG).of(Object(u.b)(h.a)).contramap(m.a).connect(Object(c.b)(d.DRILL_RIG));a.a=(()=>o.createElement(l.a,null,o.createElement(_,{title:"Буровые",onRowClick:e=>Object(p.c)(Object(f.c)(i.a.app.chapterDrillRigs.drillRig.index.get(e)))}),o.createElement(r.a,{link:i.a.app.chapterDrillRigs.createDrillRig.index.path},o.createElement(s.a.Add,null))))},"./src/chapters/jobs/AddAnyJobDialog.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("../biz/dist/index.js")),r=(t.n(o),t("./node_modules/material-ui/Dialog/index.js")),s=t.n(r),i=t("./src/smart/Pure.ts"),l=t("./src/controls/index.ts"),d=t("./src/store/configureStore.tsx"),u=t("./src/chapters/jobs/index.tsx"),c=t("../random/dist/index.js"),m=(t.n(c),t("./src/chapters/jobs/JobFullForm.tsx"));a.a=Object(i.a)().addState({job:{},enabled:!1}).ap(e=>n.createElement(s.a,{onClose:e.onClose,open:e.open,fullWidth:!0},n.createElement(r.DialogTitle,null,"Создать новое мероприятие"),n.createElement(m.a,{onlyTouchedErrors:!0,model:e.job||{},forked:!0,onValid:a=>e.setState({enabled:!0,job:a}),onInvalid:a=>e.setState({enabled:!1,job:a})}),n.createElement(r.DialogActions,null,n.createElement(l.b,{onClick:e.onClose},"Отмена"),n.createElement(l.b,{onClick:()=>(e=>{const a={jobId:Object(c.generateGuid)()};e=Object.assign({},e,a);const t=o.JOB.create(e,e);Object(d.c)(t),u.a.job.index.push(e)})(e.job),disabled:!e.enabled},"Создать мероприятие"))))},"./src/chapters/jobs/JobFullForm.tsx":function(e,a,t){"use strict";var n=t("./src/smart/genericForm.tsx"),o=t("../biz/dist/index.js"),r=(t.n(o),t("./src/smart/caseRender.ts")),s=t("./src/layout/CenteredCaption.tsx");a.a=Object(r.a)(Object(n.a)(o.JOB)).isNilOrEmpty("model",Object(s.a)("Мероприятие не существует или у вас нет прав доступа"))},"./src/chapters/jobs/JobPage.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("../biz/dist/index.js")),r=(t.n(o),t("./src/layout/index.ts")),s=t("./src/chapters/jobs/JobFullForm.tsx"),i=t("./src/smart/props.ts"),l=t("./src/smart/form/DialogEditFormUC.tsx"),d=t("./src/store/configureStore.tsx");const u=Object(i.a)(e=>n.createElement(l.a,{stretch:!0,model:e.model,viewer:s.a,onEdit:a=>Object(d.c)(o.JOB.update({rigId:e.rigId,jobId:e.jobId},a))})).connectProp("model",o.JOB.bySpec);a.a=class extends n.Component{render(){return n.createElement(r.f,null,n.createElement(u,{rigId:this.props.rigId,jobId:this.props.jobId}),n.createElement("div",null,JSON.stringify(this.props)))}}},"./src/chapters/jobs/PageAllJobs.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/smart/props.ts")),r=t("./src/store/biz.ts"),s=t("./src/controls/Fab.tsx"),i=t("./src/styles/SVGLibrary.tsx"),l=t("./src/grids/grid/gridElements.tsx"),d=t("./src/layout/PageLayout.tsx"),u=t("./src/smart/Pure.ts"),c=t("./src/store/configureStore.tsx"),m=t("./src/chapters/jobs/index.tsx"),p=t("./node_modules/react-router-redux/es/index.js"),f=t("./src/chapters/jobs/jobParts.tsx"),h=t("./src/chapters/jobs/AddAnyJobDialog.tsx");const _=Object(o.a)(f.a).connectProp("data",r.JOB.asList).defaultProp("onRowClick",e=>Object(c.c)(Object(p.c)(m.a.job.index.get({rigId:e.rigId,jobId:e.jobId})))),b=Object(u.a)().of(_).contramap(l.a),v=Object(u.a)().addState({open:!1}).ap(e=>n.createElement(d.a,null,n.createElement(h.a,{open:e.open,onClose:()=>e.setState({open:!1})}),n.createElement(b,{title:"Мероприятия"}),n.createElement(s.a,{onClick:()=>{e.setState({open:!0})}},n.createElement(i.b.Add,null))));a.a=v},"./src/chapters/jobs/index.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/chapters/makeRoute.tsx")),r=t("./src/chapters/jobs/PageAllJobs.tsx"),s=t("./src/chapters/jobs/JobPage.tsx"),i=t("./src/styles/SVGLibrary.tsx"),l=t("./src/smart/RoutedPage.ts");a.a={index:Object(o.a)({path:"/app/jobs",innerIndex:"/app/jobs/all",title:"Мероприятия",label:"Мероприятия",icon:n.createElement(i.b.Hamburger,null)},class extends l.a{render(){return this.renderChildRoutes()}}),jobsList:{index:Object(o.a)({path:"/app/jobs/all"},r.a)},job:{index:Object(o.a)({path:"/app/jobs/job/:rigId/:jobId",get:e=>`/app/jobs/job/${e.rigId}/${e.jobId}/`},s.a)}}},"./src/chapters/jobs/jobParts.tsx":function(e,a,t){"use strict";var n=t("./src/grids/grid/pureGrid.ts"),o=t("../biz/dist/index.js"),r=(t.n(o),t("./src/smart/caseRender.ts")),s=t("./src/layout/CenteredCaption.tsx");const i=Object(r.a)(Object(n.a)(o.biz.JOB,["rigId","jobTypeId","drillRigId","comment"])).isNilOrEmpty("data",Object(s.a)("Не создано ни одного мероприятия"));a.a=i},"./src/chapters/makeMultipleAssignView.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/layout/PageLayout.tsx")),r=t("./src/styles/Typography.tsx"),s=t("./src/layout/index.ts"),i=t("./src/layout/Span.tsx"),l=t("./node_modules/material-ui/Button/index.js"),d=t.n(l),u=t("../biz/dist/index.js"),c=(t.n(u),t("./src/layout/Paper.tsx")),m=t("./src/grids/SmartToolbar.tsx"),p=t("./src/grids/Expandable.ts"),f=t("./src/grids/pureTree.ts"),h=t("./src/refs/RefTemplate/RefGridTemplate.tsx");a.a=function(e,a){const t=Object(m.c)();return Object(f.a)(a).addProps({title:"Название",caption:"подпись",onOk:console.log,onCancel:console.log,okText:"Назначить",cancelText:"Отмена"}).ap(l=>n.createElement(o.a,null,n.createElement(r.Title,null,l.title),n.createElement(i.a.Caption2,null,l.caption),n.createElement(c.a,null,n.createElement(t,Object.assign({},l),({value:e})=>e&&e.length?`Выбрано ${Object(u.pluralize)(a)(e.length)}`:Object(h.a)(a.lang.plural)),n.createElement(e,Object.assign({},l,{mode:p.b.MULTI_SELECT,idKey:a.uniqueProperty}))),n.createElement(s.d,{reversed:!0},n.createElement(d.a,{disabled:!l.value||!l.value.length,onClick:()=>l.onOk(l.value)},l.okText),n.createElement(d.a,{onClick:l.onCancel},l.cancelText))))}},"./src/chapters/makeRoute.tsx":function(e,a,t){"use strict";a.a=function(e,a,t){e.component=a,t&&(t[e.path]=e);e.get||(e.get=(()=>e.path));const i=Object.assign(e,{push:a=>Object(n.c)(Object(r.c)(e.get(a))),replace:a=>Object(n.c)(Object(r.c)(e.get(a)))});return Object.assign(i,{Routed:t=>o.createElement(s.b,{key:e.path,path:e.path,exact:e.exact,strict:e.strict,render:e=>o.createElement(a,Object.assign({},e.match.params,e,t))})})};var n=t("./src/store/configureStore.tsx"),o=t("./node_modules/react/index.js"),r=(t.n(o),t("./node_modules/react-router-redux/es/index.js")),s=t("./node_modules/react-router/es/index.js");new Map},"./src/chapters/makeSingularAssignView.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/styles/Typography.tsx")),r=t("./src/layout/Span.tsx"),s=t("./src/layout/Paper.tsx"),i=t("./src/grids/SmartToolbar.tsx"),l=t("./src/grids/Expandable.ts"),d=t("./src/grids/pureTree.ts"),u=t("./src/refs/RefTemplate/RefGridTemplate.tsx");a.a=function(e,a){const t=Object(i.c)();return Object(d.a)(a).addProps({title:"Название",caption:"подпись",onOk:console.log,onCancel:console.log,okText:"Назначить",cancelText:"Отмена"}).ap(i=>n.createElement("div",null,n.createElement(o.Title,null,i.title),n.createElement(r.a.Caption2,null,i.caption),n.createElement(s.a,null,n.createElement(t,Object.assign({},i),Object(u.a)(a.lang.plural)),n.createElement(e,Object.assign({},i,{mode:l.b.SELECT,idKey:a.uniqueProperty})))))}},"./src/chapters/reference/ChapterReferences.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/refs/RefsList.tsx")),r=t("../biz/dist/index.js"),s=(t.n(r),t("./src/store/configureStore.tsx")),i=t("../utils/dist/index.js"),l=(t.n(i),t("./src/styles/SVGLibrary.tsx")),d=t("./node_modules/react-router-redux/es/index.js"),u=t("./src/refs/well_refs/WellPlaces.tsx"),c=t("./src/refs/well_refs/WellFields.tsx"),m=t("./src/refs/well_refs/WellLicenseAreas.tsx"),p=t("./src/refs/well_refs/WellPurposes.tsx"),f=t("./src/refs/well_refs/WellStatuses.tsx"),h=t("./src/refs/RigWinchTypes.tsx"),_=t("./src/refs/ContractorTypes.tsx"),b=t("./src/refs/Incidents.tsx"),v=t("./src/smart/RoutedPage.ts"),y=t("./src/layout/index.ts");class g extends v.a{render(){return n.createElement(y.e,null,this.renderChildRoutes())}}const k={index:{component:g,path:"/app/refs",innerIndex:"/app/refs/list",icon:n.createElement(l.a.Help,null),label:"Справочники",title:"Управление справочниками"},list:{index:{title:"Управление справочниками",path:"/app/refs/list",component:()=>n.createElement(o.a,{data:(()=>r.schemesList.filter(e=>e&&e.isReference&&!e.isNested).map(e=>({id:e.name,name:Object(i.capitalize)(e.lang.name),count:e.asList()().length})))(),onSelect:e=>Object(s.c)(Object(d.c)(k[e.id].index.path))}),exact:!0}},[r.WELL_PLACE.name]:{index:{component:u.a,title:"Площади",path:"/app/refs/wellPlaces"}},[r.WELL_FIELD.name]:{index:{component:c.a,title:"Месторождения",path:"/app/refs/wellFields"}},[r.WELL_LICENSE_AREA.name]:{index:{component:m.a,title:"Лицензионные участки",path:"/app/refs/wellLicenseAreas"}},[r.WELL_PURPOSE.name]:{index:{component:p.a,title:"Назначения скважин",path:"/app/refs/wellPurposes"}},[r.WELL_STATUS.name]:{index:{component:f.a,title:"Статусы скважин",path:"/app/refs/wellStatuses"}},[r.INCIDENT_TYPE.name]:{index:{component:b.a,title:"Инциденты (НПВ)",path:"/app/refs/incidentTypes"}},[r.CONTRACTOR_TYPE.name]:{index:{component:_.a,title:"Подрядчики",path:"/app/refs/contractorTypes"}},[r.RIG_WINCH_TYPE.name]:{index:{component:h.a,title:"Буровые лебёдки",path:"/app/refs/rigWinchTypes"}}};a.a=k},"./src/chapters/reports/AddAnyReportDialog.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("../biz/dist/index.js")),r=(t.n(o),t("./node_modules/material-ui/Dialog/index.js")),s=t.n(r),i=t("./src/smart/Pure.ts"),l=t("./src/controls/index.ts"),d=t("./src/store/configureStore.tsx"),u=t("./src/chapters/reports/index.tsx"),c=t("../random/dist/index.js"),m=(t.n(c),t("./src/smart/genericForm.tsx"));const p=Object(m.a)(o.REPORT,["rigId","reportDate","reportFormId"]);a.a=Object(i.a)().addState({report:{},enabled:!1}).ap(e=>n.createElement(s.a,{onClose:e.onClose,open:e.open,fullWidth:!0},n.createElement(r.DialogTitle,null,"Созданть новый рапорт"),n.createElement(p,{onlyTouchedErrors:!0,model:e.report||{},forked:!0,onValid:a=>e.setState({enabled:!0,report:a}),onInvalid:a=>e.setState({enabled:!1,report:a})}),n.createElement(r.DialogActions,null,n.createElement(l.b,{onClick:e.onClose},"Отмена"),n.createElement(l.b,{onClick:()=>(e=>{const a={guid:Object(c.generateGuid)()},t=o.REPORT.create(Object.assign({},a,e),e);Object(d.c)(t),u.a.report.index.push(e)})(e.report),disabled:!e.enabled},"Создать рапорт"))))},"./src/chapters/reports/PageAllReports.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/smart/props.ts")),r=t("./src/store/biz.ts"),s=t("./src/chapters/reports/reportParts.tsx"),i=t("./src/controls/Fab.tsx"),l=t("./src/styles/SVGLibrary.tsx"),d=t("./src/grids/grid/gridElements.tsx"),u=t("./src/layout/PageLayout.tsx"),c=t("./src/smart/Pure.ts"),m=t("./src/store/configureStore.tsx"),p=t("./src/chapters/reports/index.tsx"),f=t("./node_modules/react-router-redux/es/index.js"),h=t("./src/chapters/reports/AddAnyReportDialog.tsx");const _=Object(o.a)(s.a).connectProp("data",r.REPORT.asList).defaultProp("onRowClick",e=>Object(m.c)(Object(f.c)(p.a.report.index.get({rigId:e.rigId,reportDate:e.reportDate,reportFormId:e.reportFormId})))),b=Object(c.a)().of(_).contramap(d.a),v=Object(c.a)().addState({open:!1}).ap(e=>n.createElement(u.a,null,n.createElement(h.a,{open:e.open,onClose:()=>e.setState({open:!1})}),n.createElement(b,{title:"Рапорты"}),n.createElement(i.a,{onClick:()=>{e.setState({open:!0})}},n.createElement(l.b.Add,null))));a.a=v},"./src/chapters/reports/PageReport.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/layout/PageLayout.tsx")),r=t("./src/chapters/reports/sections/SignatoriesSectionCard.tsx");a.a=class extends n.Component{render(){return n.createElement(o.a,null,n.createElement(r.a,Object.assign({},this.props)),n.createElement("div",null,JSON.stringify(this.props)))}}},"./src/chapters/reports/index.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/chapters/makeRoute.tsx")),r=t("./src/chapters/reports/PageAllReports.tsx"),s=t("./src/chapters/reports/PageReport.tsx"),i=t("./src/styles/SVGLibrary.tsx"),l=t("./src/smart/RoutedPage.ts");a.a={index:Object(o.a)({path:"/app/reports",innerIndex:"/app/reports/all",title:"Рапорты",label:"рапорты",icon:n.createElement(i.b.Hamburger,null)},class extends l.a{render(){return this.renderChildRoutes()}}),reportList:{index:Object(o.a)({path:"/app/reports/all"},r.a)},report:{index:Object(o.a)({path:"/app/reports/report/:rigId/:reportDate/:reportFormId",get:e=>`/app/reports/report/${e.rigId}/${e.reportDate}/${e.reportFormId}`},s.a)}}},"./src/chapters/reports/reportParts.tsx":function(e,a,t){"use strict";var n=t("./src/grids/grid/pureGrid.ts"),o=t("../biz/dist/index.js"),r=(t.n(o),t("./src/smart/caseRender.ts")),s=t("./src/layout/CenteredCaption.tsx");const i=Object(r.a)(Object(n.a)(o.biz.REPORT,["rigId","reportFormId","reportDate"])).isNilOrEmpty("data",Object(s.a)("Не создано ни одного рапорта"));a.a=i},"./src/chapters/reports/sections/SectionCard.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/material-ui/Card/index.js")),r=t.n(o),s=t("./src/controls/index.ts"),i=t("./node_modules/recompose/es/Recompose.js"),l=t("./node_modules/styled-components/dist/styled-components.es.js"),d=t("./src/styles/Typography.tsx");const u=Object(l["a"])(Object(i["d"])(r.a))`
    width: 100%
`;a.a=class extends n.Component{constructor(){super(...arguments),this.title="Секция"}render(){return n.createElement(u,null,n.createElement(d.Title,null,this.title),n.createElement(o.CardContent,null,this.renderChildren()),n.createElement(o.CardActions,null,n.createElement(s.b,{dense:!0},"Раздел готов"),n.createElement(s.b,{dense:!0},"Следующий раздел")))}}},"./src/chapters/reports/sections/SignatoriesSectionCard.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/chapters/reports/sections/SectionCard.tsx")),r=t("../biz/dist/index.js"),s=(t.n(r),t("./src/smart/genericForm.tsx")),i=t("./src/smart/connectForm.ts");const l=Object(s.a)(r.SIGNATORIES,["supervisorName","drillingForemanName","drillingForema"],{withHeader:!1}).ap(e=>n.createElement("div",null," ",e.model)),d=Object(i.a)(r.SIGNATORIES)(l);a.a=class extends o.a{renderChildren(){return n.createElement(d,Object.assign({},this.props))}}},"./src/controls/AdminItemToolbar.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/inputs/index.ts")),r=t("../biz/dist/index.js"),s=(t.n(r),t("./src/layout/index.ts")),i=t("./src/styles/font.ts"),l=t("./src/layout/Div.tsx"),d=t("./node_modules/moment/moment.js"),u=(t.n(d),t("./src/layout/Box.tsx")),c=t("./src/smart/caseRender.ts"),m=t("./src/controls/RemoveButton.tsx"),p=t("./src/styles/index.ts"),f=t("./src/smart/props.ts"),h=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)a.indexOf(n[o])<0&&(t[n[o]]=e[n[o]])}return t};const _=p["f"]`
    margin-bottom: 10px;
`(Object(i.caption)(i.ExtrasoftBlack)(l.a)),b=Object(c.a)(e=>{var{creationDate:a,creatorUserId:t}=e,o=h(e,["creationDate","creatorUserId"]);return n.createElement(_,Object.assign({},o),`Созд. ${d(a).format("DD MMM YYYY")}, ${Object(r.sel)(r.USER).getShortName(t)()}`)}).isNil("creatorUserId",null);a.a=b;const v=p["f"]`
    padding: 3px 0 3px 24px;
    margin-left: 24px;
    border-left: 1px solid ${p.e.DISABLED_GRAY};
    flex: none;
`(l.a),y=p["f"]`
    flex: 1 0 auto;
`(l.a),g=p["f"]`
    justify-content: flex-end;
    flex: none;
    align-items: center;
    flex: 0 1 60%;
`(u.a),k=p["f"]`
    align-items: flex-end;
`(u.b);a.b=function(e){const a=Object(o.h)(e,"name",o.d),t=Object(o.h)(e,"comment",o.c),i=`Введите имя для ${e.lang.some}`,l=`Введите комментарий для ${e.lang.some}`,d=void 0===e.properties.name;return Object(f.a)(u=>n.createElement(s.b,null,n.createElement(y,null,d?n.createElement(o.d,{type:"name",readonly:!0,value:Object(r.sel)(e).getFullName(u.value)()}):n.createElement(a,{idOrSpec:u.id,label:i,title:"Имя"})),n.createElement(g,null,n.createElement(k,null,n.createElement(b,{creatorUserId:u.value.creatorUserId,creationDate:u.value.creationDate}),n.createElement(t,{idOrSpec:u.id,label:l,title:"Комментарий"})),!u.removeIsHidden&&n.createElement(v,null,n.createElement(m.a,{disabled:!0}))))).connectProp("value",a=>Object(r.sel)(e).byKey(a.id))}},"./src/controls/AlertDialog.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/material-ui/Dialog/index.js")),r=t.n(o),s=t("./src/controls/Button.tsx");a.a=(e=>n.createElement(r.a,{open:e.open,onRequestClose:e.onCancel},n.createElement(o.DialogTitle,null,e.title),n.createElement(o.DialogContent,null,n.createElement(o.DialogContentText,null,e.text)),n.createElement(o.DialogActions,null,e.onCancel&&n.createElement(s.a,{onClick:e.onCancel,color:"primary"},e.cancelText),n.createElement(s.a,{onClick:e.onOk,color:"primary"},e.okText))))},"./src/controls/Button.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/material-ui/Button/index.js")),r=t.n(o),s=t("./node_modules/material-ui/styles/index.js"),i=(t.n(s),t("./src/styles/index.ts")),l=t("./node_modules/prop-types/index.js"),d=(t.n(l),t("./src/store/configureStore.tsx")),u=t("./node_modules/react-router-redux/es/index.js");const c=e=>e.link?n.createElement(r.a,Object.assign({onClick:()=>Object(d.c)(Object(u.c)(e.link))},e)):n.createElement(r.a,Object.assign({},e)),m={root:{color:i.e.PRIMARY}},p=(e,a)=>a.disabled?e.primary?n.createElement(c,Object.assign({raised:!0,disabled:!0,color:"accent",style:{color:i.e.WHITE}},e)):n.createElement(c,Object.assign({},e,{disabled:!0})):e.primary?e.disabled?n.createElement(c,Object.assign({raised:!0,color:"accent",style:{color:i.e.WHITE}},e)):n.createElement(c,Object.assign({raised:!0,color:"primary",style:{color:i.e.WHITE,backgroundColor:i.e.PRIMARY}},e)):n.createElement(c,Object.assign({},e));p.contextTypes={disabled:l.bool},a.a=Object(s.withStyles)(m)(p)},"./src/controls/CustomScrollbar.tsx":function(e,a,t){"use strict";var n=t("./node_modules/styled-components/dist/styled-components.es.js"),o=t("./src/styles/colors.ts");a.a=n["a"].div`
    ${({height:e})=>void 0===e?"":`\n        max-height: ${e}px;\n        height: 100%;\n    `}
    overflow-y: auto;
    overflow-x: hidden;

    background:
        -webkit-linear-gradient(top, white 30%,rgba(255,255,255,0) 100%),
        -webkit-linear-gradient(top, rgba(255,255,255,0) 0%, white 30%) bottom,
        -webkit-radial-gradient(50% 0, ellipse cover, hsla(0,0%,0%,0.4) 30%, transparent 70%),
        -webkit-radial-gradient(50% 100%, ellipse cover, hsla(0,0%,0%,0.4) 30%, transparent 70%) bottom;
    background-size:100% 40px,100% 40px,110% 14px,110% 14px;
    background-repeat: no-repeat;
    background-attachment: local, local, scroll, scroll;
    background-color: ${o.m.WHITE};

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        width: 3px;
        background-color: ${o.m.BLACK_GRAY};
    }
`},"./src/controls/DropdownMenu.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/material-ui/Menu/index.js")),r=t.n(o),s=t("./src/layout/MenuItem.tsx"),i=t("./src/styles/restyle.ts"),l=t("./src/layout/Span.tsx");const d=i["a"]`
    max-height: 24px;
    padding-right: 24px;
`(l.b);a.a=((e=[])=>(class extends n.Component{constructor(){super(),this.toggleMenu=(e=>()=>void 0===e?this.setState({isOpen:!this.state.isOpen}):this.setState({isOpen:e})),this.renderMenuItem=((e,a)=>n.createElement(s.a,{key:a,onClick:()=>{e.onChange&&e.onChange(e.value),this.toggleMenu(!1)()}},n.createElement(d,null,e.renderIcon&&e.renderIcon()),n.createElement("span",null,e.renderLabel&&e.renderLabel()))),this.anchor=null,this.state={isOpen:!1}}render(){return n.createElement("span",null,n.createElement("span",{ref:e=>this.anchor=e,onClick:this.toggleMenu(!0)},this.props.children),n.createElement(r.a,{open:this.state.isOpen,onClose:this.toggleMenu(!1),anchorEl:this.anchor},this.props.data.map(this.renderMenuItem)))}}))()},"./src/controls/ExpansionButton.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/material-ui/IconButton/index.js")),r=t.n(o),s=t("./src/styles/SVGLibrary.tsx"),i=t("./node_modules/styled-components/dist/styled-components.es.js"),l=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)a.indexOf(n[o])<0&&(t[n[o]]=e[n[o]])}return t};const d=i["b"]`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(180deg); }
`,u=i["b"]`
    0% { transform: rotate(180deg); }
    100% { transform: rotate(0deg); }
`,c=Object(i["a"])(r.a)`
    width: 40px !important;
    height: 40px !important;
`,m=Object(i["a"])(e=>{var{animate:a,expanded:t}=e,o=l(e,["animate","expanded"]);return n["createElement"](s["a"].DropdownDown,Object.assign({},o))})`
    animation: ${({animate:e,expanded:a})=>e?a?d:u:""} 0.5s;
    transform: rotate(${({expanded:e})=>e?180:0}deg);
`;a.a=class extends n.Component{constructor(e){super(e),this.handleClick=(()=>{this.props.onChange(!this.state.expanded),this.setState({expanded:!this.state.expanded})}),this.state={expanded:this.props.value,animate:!1}}componentWillReceiveProps(e){e.value!==this.props.value?this.setState({animate:!0}):this.setState({animate:!1})}render(){return n.createElement(c,{onClick:this.handleClick},n.createElement(m,{animate:this.state.animate,expanded:this.state.expanded}))}}},"./src/controls/Fab.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/controls/Button.tsx")),r=t("./node_modules/styled-components/dist/styled-components.es.js"),s=t("./src/layout/index.ts"),i=t("./src/styles/index.ts"),l=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)a.indexOf(n[o])<0&&(t[n[o]]=e[n[o]])}return t};const d=Object(r["a"])(s["a"])`
    position: fixed;
    bottom: 72px;
    right: 72px;
`,u={boxShadow:"none",color:i.e.WHITE};a.a=(e=>{var{staticPosition:a}=e,t=l(e,["staticPosition"]);return a?n.createElement(o.a,Object.assign({style:u,fab:!0},t,{primary:!0})):n.createElement(d,null,n.createElement(o.a,Object.assign({fab:!0},t,{primary:!0})))})},"./src/controls/GroupingControl.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/styled-components/dist/styled-components.es.js")),r=t("./src/styles/index.ts"),s=t("./src/layout/index.ts");const i=r.b.FontFamily(o["a"].button`
    font-size: 14px;
    line-height: 1.43;
    padding: 0 14px;
    margin-right: 8px;

    box-sizing: border-box;
    height: 26px;
    display: flex;
    align-items: center;
    text-align: center;

    border-width: 1px;
    border-style: solid;
    border-color: ${({active:e})=>e?r.e.DEEP_BLUE:r.e.TRANSPARENT};
    outline: none;

    color: ${({active:e})=>e?r.e.DEEP_BLUE:r.e.SOFT_BLACK};
    background: none;
    border-radius: 2px;
    cursor: pointer;

    &:disabled {
        cursor: default;
        color: ${r.e.SOFT_BLACK};
    }
`),l=r["f"]`
	color: ${r.e.SOFT_BLACK};
	font-size: 12px;
	margin-right: 8px;
`(r.b.FontFamily(s.a)),d=r["f"]`
    display: flex;
    width: 100%;
    align-items: center;
`(s.a),u=r["f"]`
    display: flex;
    align-items: center;
    justify-content: space-between;
`(s.a);a.a=class extends n.Component{constructor(e){super(e),this.renderButtons=(()=>this.props.data.map((e,a)=>n.createElement(i,{active:a.toString()===this.state.active,key:`gctrl${a}`,onClick:()=>{this.setState({active:a.toString()}),this.props.onChange(a.toString())}},e))),this.renderClearButton=(()=>n.createElement(i,{onClick:()=>{this.setState({active:""}),this.props.onChange()},active:!this.state.active},"Без группировки",n.createElement(r.c.CloseCross,{style:{height:"16px",width:"16px",marginLeft:"4px"}}))),this.state={active:this.props.value?this.props.value:""}}render(){return n.createElement(d,null,n.createElement(l,null,"Группировка:"),n.createElement(u,null,this.renderButtons(),this.renderClearButton()))}}},"./src/controls/IconButton.tsx":function(e,a,t){"use strict";var n=t("./node_modules/material-ui/IconButton/index.js"),o=t.n(n);a.a=o.a},"./src/controls/Link.tsx":function(e,a,t){"use strict";var n=t("./node_modules/styled-components/dist/styled-components.es.js"),o=t("./node_modules/react-router-dom/es/index.js"),r=t("./src/styles/colors.ts");a.a=Object(n["a"])(o["a"])`
    text-align: center;
    color: ${r.m.PALE_VIOLET_RED};
    font-size: 12px;
    text-decoration: ${({decoration:e})=>e?"underline":"none"};
`},"./src/controls/RemoveButton.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/styled-components/dist/styled-components.es.js")),r=t("./src/styles/index.ts");const s=o["a"].button`
    background-color: ${({disabled:e})=>e?r.e.DISABLED_GRAY:r.e.ACCENT_RED};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 36px;
    border: none;
    border-radius: 2px;

    &:hover {
        ${({disabled:e})=>!e&&`\n        cursor: pointer;\n        background-color: ${r.e.BRIGHT_RED};\n        box-shadow: 0 2px 2px 0 rgba(37, 37, 37, 0.24), 0 0 2px 0 rgba(37, 37, 37, 0.12);\n    `}
    }

    &:focus {
        outline: none;
    }
`;a.a=(e=>n.createElement(s,Object.assign({},e),n.createElement(r.c.Delete,{style:{color:r.e.WHITE}})))},"./src/controls/Search.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/styles/index.ts")),r=t("./src/layout/index.ts"),s=t("./node_modules/styled-components/dist/styled-components.es.js"),i=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)a.indexOf(n[o])<0&&(t[n[o]]=e[n[o]])}return t};const l=o["f"]`
   width: ${e=>e.expanded?"100%":"0"};
   transition: width .2s ease-in-out;
`(r.a),d=o["f"]`
    position: relative;
    width: 360px;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
`(r.a),u=o["f"]`
    opacity: ${({expanded:e})=>e?"1":"0"};
    z-index: ${({expanded:e})=>e?"2":"0"};
    position: absolute;
    right: -5px;
    top: 2px;
    color: ${({white:e})=>e?o.e.WHITE:o.e.SOFT_BLACK};

    &:hover {
        cursor: pointer;
    }
`(o.c.CloseCross),c=o["f"]`
    z-index: 3;
    margin-right: 8px;
    color: ${({white:e})=>e?o.e.WHITE:o.e.SOFT_BLACK};

    &:hover {
        cursor: pointer;
    }
`(o.c.Search),m=s["a"].input`
    color: ${({white:e})=>e?o.e.WHITE:o.e.DEFAULT_BLACK};
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid ${({white:e})=>e?o.e.HEAVY_WHITE:o.e.SOFT_BLACK};
    border-radius: 0;
    display: block;
    font-size: 16px;
    font-weight: 400;
    margin: 0;
    padding: 5px 0;
    width: 100%;
    text-align: left;
    background: 0;
    box-shadow: none;
    outline: none;
`,p=o.b.FontFamily(s["a"].label`
    color: ${({white:e})=>e?o.e.DEFAULT_WHITE:o.e.DEFAULT_BLACK};
    opacity: ${e=>e.expanded&&!e.shown?"0.54":"0"};
    position: absolute;
    top: 5px;
    left: 32px;
    font-weight: 200 !important;
    transition: left 0.2s ease-in-out;
`);a.a=class extends n.Component{constructor(e){super(e),this.openSearch=(()=>{this.props.onChange(this.state.value),this.setState({expanded:!0})}),this.onChange=(e=>{this.props.onChange(e.target.value),this.setState({value:e.target.value})}),this.closeSearch=(()=>{this.props.onChange(void 0),this.setState({expanded:!1})}),this.state={value:this.props.value,expanded:!1}}render(){const e=this.props,{onChange:a}=e,t=i(e,["onChange"]);return n.createElement(d,Object.assign({},t),n.createElement(l,{expanded:this.state.expanded},n.createElement(p,{expanded:this.state.expanded,shown:this.state.value.length>0,white:this.props.isWhite},"Поиск"),n.createElement(u,{white:this.props.isWhite,expanded:this.state.expanded,onClick:this.closeSearch}),n.createElement(m,{white:this.props.isWhite,value:this.state.value,onChange:this.onChange})),n.createElement(c,{white:this.props.isWhite,onClick:this.openSearch}))}}},"./src/controls/SearchMatch.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/prop-types/index.js")),r=(t.n(o),t("./src/smart/contexted.ts"));const s=Object(r.a)({searchRegExp:o.instanceOf(RegExp)})(({children:e,searchRegExp:a})=>e&&a?n.createElement("span",{dangerouslySetInnerHTML:{__html:((e,a)=>e.replace(a,e=>"<mark>"+e+"</mark>"))(e,a)}}):e);a.a=s},"./src/controls/TabsRouted.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/material-ui/Tabs/index.js")),r=t.n(o),s=t("./node_modules/react-redux/es/index.js"),i=t("./node_modules/react-router-redux/es/index.js"),l=t("./src/store/configureStore.tsx"),d=t("./node_modules/material-ui/AppBar/index.js"),u=t.n(d),c=t("./node_modules/styled-components/dist/styled-components.es.js"),m=t("./src/styles/colors.ts");const p=Object(c["a"])(u.a)`
    box-sizing: border-box;
    padding-left: 72px;
    position: fixed !important;
    left: 0 !important;
    top: 54px !important;
`,f={backgroundColor:m.m.GREY_BLUE};a.a=Object(s.b)(e=>({currentPath:e.routing.location.pathname}))(class extends n.Component{constructor(){super(...arguments),this.onChange=((e,a)=>{const t=this.props.tabs[a].path;Object(l.c)(Object(i.c)(t))})}render(){const{tabs:e,currentPath:a}=this.props,t=e.find(e=>a===e.path);return n.createElement(p,{style:f},n.createElement(r.a,{value:e.indexOf(t),onChange:this.onChange},e.map((e,a)=>n.createElement(o.Tab,{label:e.label,key:a}))))}})},"./src/controls/index.ts":function(e,a,t){"use strict";var n=t("./src/controls/AdminItemToolbar.tsx");t.d(a,"a",function(){return n.b});var o=t("./src/controls/Button.tsx");t.d(a,"b",function(){return o.a});t("./src/controls/IconButton.tsx");var r=t("./src/controls/Search.tsx");t.d(a,"f",function(){return r.a});var s=t("./src/controls/Fab.tsx");t.d(a,"d",function(){return s.a});var i=t("./src/controls/Link.tsx");t.d(a,"e",function(){return i.a});t("./src/controls/CustomScrollbar.tsx");var l=t("./src/controls/DropdownMenu.tsx");t.d(a,"c",function(){return l.a})},"./src/grids/Expandable.ts":function(e,a,t){"use strict";t.d(a,"b",function(){return n});var n,o,r=t("./node_modules/react/index.js"),s=(t.n(r),t("../utils/dist/index.js")),i=(t.n(s),t("./node_modules/ramda/index.js")),l=(t.n(i),t("./node_modules/prop-types/index.js"));t.n(l);(o=n||(n={})).VIEW="",o.SELECT="select",o.MULTI_SELECT="multiSelect";const d=e=>{if(!e.scheme)return e;e.idKey||(e=Object.assign({},e,{idKey:e.scheme.uniqueProperty}))};class u extends r.Component{constructor(e){super(d(e)),this.getChildContext=(()=>{return this.props.search&&""!==this.props.search?{searchRegExp:new RegExp(this.props.search,"gi")}:{}}),this.expandAll=(e=>this.setState({expandedKeys:this.getDataAsArray(e).map(this.getId)})),this.collapseAll=(e=>this.setState({expandedKeys:[]})),this.getId=(e=>e[this.props.idKey]),this.getFiltered=(e=>(e=e||this.props).filter?Object(i.filter)(e.filter)(e.data):e.data),this.getDataAsArray=(e=>Object(s.toIndexedArray)(this.getFiltered())),this.memoRenderItem=((e,a,t)=>t?[this.renderRow(e,a,this),this.renderExpandRow(e,a,this)]:[this.renderRow(e,a,this)]),this.renderItem=((e,a)=>this.memoRenderItem(e,a,this.state.expandedKeys.includes(this.getId(e)))),this.toggleRowExpand=(e=>{const a=this.getId(e);let{expandedKeys:t}=this.state;t=t.includes(a)?t.filter(e=>a!==e):this.props.expandOnlySingItem?t=[a]:t.concat([a]),this.props.onExpandChange?this.props.onExpandChange(t):this.setState({expandedKeys:t})}),this.renderExpandRow=((e,a,t)=>null),this.renderRow=((e,a,t)=>null),this.handleChangePage=(e=>{this.props.onQueryChange&&this.props.onQueryChange({offset:e}),this.setState({offset:e})}),this.isSelectionDisabled=(e=>(this.props.isSelectionDisabled||i.F)(e)),this.handleChangeRowsPerPage=(e=>{this.props.onSettingsChange&&this.props.onSettingsChange({maxRows:e}),this.setState({maxRows:e})}),this.getVisibleRows=(()=>this.props.withPagination?this.getDataAsArray().slice(this.state.offset,this.state.offset+this.state.maxRows):this.getDataAsArray()),this.getTotalRowsAmount=(()=>this.getDataAsArray().length),this.state={expandedKeys:[]},e.expandAll&&this.expandAll(e)}componentWillReceiveProps(e,a){e.expandAll!==this.props.expandAll&&(e.expandAll?this.expandAll(e):this.collapseAll(e)),e.expandedValues&&this.setState({expandedKeys:e.expandedValues})}}a.a=u,u.childContextTypes={searchRegExp:l.instanceOf(RegExp)}},"./src/grids/SelectionCell.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/styled-components/dist/styled-components.es.js")),r=t("./node_modules/material-ui/Checkbox/index.js"),s=t.n(r),i=t("./node_modules/material-ui/Radio/index.js"),l=t.n(i);const d=o["a"].td`
    padding-left: 24px;
    width: 24px;
    display: table-cell;
    vertical-align: middle;
`;a.a=(e=>n.createElement(d,null,e.radio?n.createElement(l.a,{style:{width:"20px",height:"20px"},disabled:e.disabled,checked:e.inversed?!e.selected:e.selected,onChange:(a,t)=>e.onChange(t)}):n.createElement(s.a,{style:{width:"24px",height:"24px"},disabled:e.disabled,checked:e.inversed?!e.selected:e.selected,onChange:(a,t)=>e.onChange(t)})))},"./src/grids/SmartToolbar.tsx":function(e,a,t){"use strict";a.c=function(){return e=>n.createElement(v,Object.assign({active:e.mode!==c.b.VIEW&&e.value&&e.value.length>0},e))},a.b=function(){return e=>n.createElement(v,Object.assign({active:e.mode!==c.b.VIEW,extra:y(e)},e))};var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/material-ui/IconButton/index.js")),r=t.n(o),s=t("./node_modules/styled-components/dist/styled-components.es.js"),i=t("./src/layout/index.ts"),l=t("./src/styles/Typography.tsx"),d=t("./src/styles/index.ts"),u=t("./src/smart/renderChildren.ts"),c=t("./src/grids/Expandable.ts"),m=t("./src/controls/DropdownMenu.tsx"),p=t("./src/controls/index.ts"),f=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)a.indexOf(n[o])<0&&(t[n[o]]=e[n[o]])}return t};const h=Object(s["a"])(i["d"])`
    padding-left: 24px;
    min-height: 64px;
    align-items: center;
    display: flex;
    background-color: ${({active:e})=>e?"rgba(0, 148, 204, .12)":d.e.WHITE};
    white-space: nowrap;
    box-sizing: content-box;
`,_=d.b.FontFamily(s["a"].span`
    color: ${d.e.DEEP_BLUE};
    font-size: 14px;
    line-height: 20px;
`),b=s["a"].div`
    display: fles;
    align-items: center;
`,v=e=>{var{extra:a,active:t}=e,o=f(e,["extra","active"]);return n.createElement(h,Object.assign({height:64,active:t},o),t?n.createElement(_,null,Object(u.a)(o.children,o)):n.createElement(l.HeadLine,null,Object(u.a)(o.children,o)),n.createElement(i.d,{stretch:!0}),Object(u.a)(a,o))};v.defaultProps={active:!1,extra:e=>n.createElement(b,null,n.createElement(p.f,{value:e.search||"",onChange:a=>{e.setState&&e.setState({search:""!==a?a:void 0})}}),n.createElement(r.a,null,n.createElement(d.c.Sort,null)))};const y=e=>a=>e.mode===c.b.VIEW?n.createElement(m.a,{data:[{renderIcon:()=>n.createElement(d.c.Add,null),renderLabel:()=>"Добавить "+(e.noun||""),onChange:e.onRequestAdd},{renderIcon:()=>n.createElement(d.c.Delete,null),renderLabel:()=>"Удалить "+(e.noun||""),onChange:()=>e.onModeChange&&e.onModeChange(c.b.MULTI_SELECT)}]},n.createElement(r.a,null,n.createElement(d.c.Dots,null))):e.value&&e.value.length>0?n.createElement(r.a,{onClick:()=>{e.onSelectionSubmit&&e.onSelectionSubmit(e.value)}},n.createElement(d.c.Delete,null)):n.createElement(r.a,{onClick:e.onSelectionCancel},n.createElement(d.c.CloseCross,null));a.a=v},"./src/grids/grid/Grid.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/ramda/index.js")),r=(t.n(o),t("../utils/dist/index.js")),s=(t.n(r),t("./node_modules/styled-components/dist/styled-components.es.js")),i=t("./src/styles/restyle.ts"),l=t("./node_modules/material-ui/Table/index.js"),d=t.n(l),u=t("./node_modules/material-ui/Checkbox/index.js"),c=t.n(u),m=t("./node_modules/material-ui/Radio/index.js"),p=t.n(m),f=t("./src/pagination/Pagination.tsx"),h=t("./src/styles/SVGLibrary.tsx"),_=t("./node_modules/material-ui/index.es.js"),b=t("./src/layout/Table.tsx"),v=t("./src/grids/Expandable.ts"),y=t("./src/store/biz.ts"),g=t("../biz/dist/index.js"),k=(t.n(g),t("./src/controls/SearchMatch.tsx")),j=t("./src/smart/renderChildren.ts"),x=t("./src/grids/styles.ts"),w=t("./node_modules/moize/es/index.js");const M=s["a"].div`
    margin: 0;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
`,S=i["a"]`
    opacity: .2;
`(h.a.ArrowUp),L=Object(x.d)(b.a),z=Object(x.d)(b.b),T=Object(x.e)(b.a),E=(e=[])=>{Object(w.a)({maxSize:1e3,maxArgs:2});class a extends v.a{constructor(a){super(a),this.getDataAsArray=(e=>{e=e||this.props;const a=Object(r.toIndexedArray)(this.getFiltered(e));if(e.search){let t=this.props.columns.map(e=>e.dataIndex);if(e.scheme){const a=Object(y.getSearchableProps)(e.scheme);t=t.filter(e=>a.includes(e))}const n=[],o=e.search.toLowerCase();for(let r=0;r<a.length;r++){const s=a[r];if(e.scheme&&g.sel(e.scheme).getFullName(s).toLowerCase().includes(o))n.push(s);else for(let e=0;e<t.length;e++)if(String(s[t[e]]).toLowerCase().includes(o)){n.push(s);break}}return n}return a}),this.arrayAsString=(e=>Array.isArray(e)?e.join(" "):e),this.getClassNames=(({classNames:e})=>e?this.arrayAsString(e):""),this.getCellClassName=(e=>e.cellClassNames?this.arrayAsString(e.cellClassNames):this.getClassNames(e)),this.getHeadClassName=(e=>e.headClassNames?this.arrayAsString(e.headClassNames):this.getClassNames(e)),this.getDefaultSortedData=(()=>{const{columns:e,isSortable:a}=this.props,t=this.getDataAsArray();if(!a)return t;const n=this.findFirstSorter(e),r=Object(o.path)(["0","dataIndex"])(e);return n?Object(o.sort)(n(this.props))(t):Object(o.sort)(this.defaultSorter(r))(t)}),this.defaultSorter=(e=>(a,t)=>{let n=a[e],o=t[e];return"string"==typeof a[e]&&"string"==typeof t[e]?(n=a[e].toLowerCase(),o=t[e].toLowerCase()):(n=a[e],o=t[e]),n>o?1:n<o?-1:0}),this.findFirstSorter=(e=>Object(o.compose)(Object(o.path)(["0","sorter"]),Object(o.filter)(e=>!!e.sorter))(e)),this.getSortedRows=(()=>null===this.state.sortDataIndex?this.getDefaultSortedData():this.sortData(this.state.sortOrder)(this.getDataAsArray())),this.sortData=(e=>Object(o.sort)((a,t)=>"asc"===e?this.state.sorter(a,t):this.state.sorter(t,a))),this.getVisibleRows=(()=>this.props.withPagination?this.getSortedRows().slice(this.state.offset,this.state.offset+this.state.maxRows):this.getSortedRows()),this.onSortClick=(({dataIndex:e,sorter:a})=>()=>{const{sortOrder:t,sortDataIndex:n}=this.state;let o;if(e!==n)o="asc";else switch(t){case null:o="asc";break;case"asc":o="desc";break;case"desc":o=null;break;default:throw new Error(`unknown sorting order: ${t}`)}const r=null==o?null:e;this.setState({sorter:a(this.props),sortDataIndex:r,sortOrder:o})}),this.onSelectionCellClick=(e=>a=>{a.preventDefault(),a.nativeEvent.stopImmediatePropagation(),a.stopPropagation(),this.isSelectionDisabled(e)||this.onSelectRow(e)}),this.onSelectRow=(e=>{const{idKey:a,onChange:t,mode:n,value:o}=this.props,r=e[a];switch(n){case"select":t([r]);break;case"multiSelect":o.includes(r)?t(o.filter(e=>e!==r)):t([...o,r]);break;default:return null}}),this.onSelectAll=(()=>{const{onChange:e,idKey:a,value:t,onSelectAllCb:n}=this.props,o=t.length>0?[]:this.getDataAsArray().filter(e=>!this.isSelectionDisabled(e)).map(e=>e[a]);n?n():e(o)}),this.renderSelectAllCheckbox=(()=>{const e=this.props.value.length,a=this.getTotalRowsAmount(),t=e>0&&e<a;return n.createElement(T,null,n.createElement(c.a,{checked:a===this.props.value.length,onChange:this.onSelectAll,indeterminate:t}))}),this.renderSelectAllCell=(()=>{switch(this.props.mode){case"select":return n.createElement(T,null);case"multiSelect":return this.renderSelectAllCheckbox();default:return null}}),this.sortIcon=(e=>{if(e!==this.state.sortDataIndex)return n.createElement(S,null);switch(this.state.sortOrder){case"asc":return n.createElement(h.a.ArrowUp,null);case"desc":return n.createElement(h.a.ArrowDown,null);default:return n.createElement(S,null)}}),this.renderSorterCell=(e=>n.createElement(M,{onClick:this.onSortClick(e)},this.sortIcon(e.dataIndex),e.title)),this.renderHeadCell=((e,a)=>{const t=e.renderHeader||o.identity,r=e.sorter?this.renderSorterCell(e):e.title;return n.createElement(z,{className:this.getHeadClassName(e),key:a},t(r))}),this.renderHead=(()=>n.createElement(l.TableHead,null,n.createElement(x.c,{className:this.getHeadRowClassName()},this.renderSelectAllCell(),this.props.columns.map(this.renderHeadCell)))),this.inputWithTooltip=(e=>a=>this.isSelectionDisabled(e)?n.createElement(T,null,n.createElement(_.c,{placement:"bottom",title:this.props.selectionDisableReason},a)):n.createElement(T,null,a)),this.renderSelectColumn=(e=>{if(""===this.props.mode)return null;const{idKey:a,mode:t,value:o}=this.props,r=o.includes&&o.includes(e[a]),s=this.inputWithTooltip(e);switch(t){case"select":return s(n.createElement(p.a,{disabled:this.isSelectionDisabled(e),checked:r,onChange:this.onSelectionCellClick(e)}));case"multiSelect":return s(n.createElement(c.a,{disabled:this.isSelectionDisabled(e),checked:r,onChange:this.onSelectionCellClick(e)}))}}),this.cellComponents=[],this.registerCellComponents=(a=>this.cellComponents=e.map(e=>e)),this.defaultCellRender=((e,a)=>n.createElement(k.a,null,e)),this.renderCell=(e=>(a,t)=>{let o=(a.render||this.defaultCellRender)(e[a.dataIndex],e,this);return"string"==typeof o&&(o=this.defaultCellRender(o,e)),n.createElement(L,{key:t,className:this.getCellClassName(a)},o)}),this.getHeadRowClassName=(()=>{const{headRowClassName:e}=this.props;return e?this.arrayAsString(e()):""}),this.getRowClassName=((e,a)=>{const{rowClassName:t}=this.props;return t?this.arrayAsString(t(e,a)):""}),this.renderExpandRow=((e,a,t)=>this.state.expandedKeys.includes(this.getId(e))&&Object(j.a)(this.props.expandedRowRender(e,this.getId(e),this),this.props)),this.renderRow=((e,a,t)=>{const{idKey:r,onRowClick:s,mode:i}=this.props,l=s&&i===v.b.VIEW?s:this.isSelectionDisabled(e)?o.identity:this.onSelectRow;return n.createElement(x.c,{pointer:!this.isSelectionDisabled(e),className:this.getRowClassName(e,a),key:e[r],hover:this.props.hover,onClick:a=>l(e)},this.renderSelectColumn(e),this.props.columns.map(this.renderCell(e)))}),this.renderBody=(()=>n.createElement(l.TableBody,null,this.getVisibleRows().map(this.renderItem))),this.getMaxRows=(()=>this.props.maxRows||this.state.maxRows),this.renderPagination=(()=>{const{offset:e,maxRows:a}=this.state;return n.createElement(f.a,{offset:e,total:this.getTotalRowsAmount(),maxRows:a,maxRowsItems:this.props.maxRowsItems,onOffsetChange:this.handleChangePage,onMaxRowsChange:this.handleChangeRowsPerPage})}),this.state=Object.assign({},this.state,{offset:a.offset||0,maxRows:a.maxRows||10,expandedKeys:a.expandedKeys||[],sortOrder:null,sortDataIndex:null,sorter:()=>null}),this.registerCellComponents(a)}componentWillReceiveProps(e,a){e.maxRowsItems&&this.setState({maxRows:Object(o.head)(e.maxRowsItems)}),super.componentWillReceiveProps(e,a)}render(){return n.createElement("div",null,n.createElement(d.a,{style:{borderCollapse:"separate"}},this.props.withoutHeader||this.renderHead(),this.renderBody()),this.props.withPagination&&this.renderPagination())}}return a.cellClasses=x.a,a.rowClasses=x.b,a.defaultProps={withPagination:!0,maxRowsItems:[5,10,50,100],hover:!0,value:[],isSelectionDisabled:e=>!1,selectionDisableReason:"",mode:v.b.VIEW,columns:e,isSortable:!0},a};a.b=E,a.a=Object.assign(E(),{cellClasses:x.a,rowClasses:x.b})},"./src/grids/grid/columns.ts":function(e,a,t){"use strict";var n=t("../biz/dist/index.js"),o=(t.n(n),t("./src/refs/RefTemplate/RefGridTemplate.tsx")),r=t("./src/grids/grid/renderers.tsx"),s=t("./src/store/biz.ts");a.a=(e=>{const a=Object(n.sel)(e).getShortName,t=(a,t=(e=>e),n)=>({title:e.properties[a].langRU,dataIndex:a,render:t}),i=a=>{const t=n.schemes[e.properties[a].langRU],r=Object(s.getScheme)(n.schemes[e.properties[a].schemeName]);return{dataIndex:a,title:Object(o.a)(t||(r.lang||n.defaultLang).singular),render:(e,a)=>{const t=Object(s.getScheme)(r).getFullName;return e?t(e)():"REF IS EMPTY"}}},l=e=>Object.assign({},t(e),{render:r.a.date,sorter:()=>(e,a)=>e<a?-1:1}),d=(t=a)=>({title:"Название",dataIndex:e.uniqueProperty,render:a=>Object(n.sel)(e).getFullName(a)()}),u=()=>({title:"Создал",dataIndex:"creatorUserId",render:e=>Object(n.sel)(n.USER).getShortName(e)()}),c=()=>Object.assign({},l("creationDate"),{title:"Дата создания"}),m=(a,n)=>{const o=e.properties[a];return"name"===a?d():"creationDate"===a?c():"creatorUserId"===a?u():"itemOf"===o.type?i(a):"datetime"===o.type?l(a):"date"===o.type?l(a):t(a,n)};return{inferr:m,create:e=>e.map(e=>"string"==typeof e?m(e):e),reference:i,simple:t,nameColumn:d,date:l,creator:u,creationDate:c}})},"./src/grids/grid/gridElements.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/layout/Paper.tsx")),r=t("./src/layout/Box.tsx"),s=t("./src/styles/SVGLibrary.tsx"),i=t("./node_modules/material-ui/IconButton/index.js"),l=t.n(i),d=t("./src/styles/Typography.tsx"),u=t("./src/smart/renderChildren.ts"),c=t("./src/controls/index.ts"),m=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)a.indexOf(n[o])<0&&(t[n[o]]=e[n[o]])}return t};const p={height:64,style:{paddingLeft:24,paddingRight:8,boxSizing:"border-box",alignItems:"center",display:"flex",minHeight:64,whiteSpace:"nowrap"}};a.a=(e=>{var{children:a}=e,t=m(e,["children"]);return n.createElement(o.a,null,n.createElement(r.a,Object.assign({},p),n.createElement(d.HeadLine,null,t.title),n.createElement(r.a,{stretch:!0}),n.createElement(c.f,{value:t.search||"",onChange:e=>{t.setState&&t.setState({search:""!==e?e:void 0})}}),n.createElement(l.a,null,n.createElement(s.b.Sort,null))),Object(u.a)(a,t))});a.b=(()=>e=>{var{headerProps:a}=e,t=m(e,["headerProps"]);return n.createElement(o.a,null,n.createElement(r.a,Object.assign({},p),n.createElement(d.HeadLine,{style:{margin:0,whiteSpace:"nowrap"}},a.title),n.createElement(d.Caption,{style:{marginLeft:30,marginBottom:0,display:"inline-block",whiteSpace:"nowrap"}},`${a.itemsCount}`),n.createElement(r.a,{stretch:!0}),n.createElement(l.a,null,n.createElement(s.b.Dots,null))),Object(u.a)(t.children,t))})},"./src/grids/grid/gridHelpers.ts":function(e,a,t){"use strict";var n=t("./src/store/getFrontendStore.ts"),o=t("../biz/dist/index.js"),r=(t.n(o),t("../utils/dist/index.js"));t.n(r);a.b=(e=>a=>({data:e.asMap()(a),scheme:e}));a.a=(e=>a=>{const t="string"==typeof e?o.schemes[e].properties[a].schemeName:e.properties[a].schemeName;return{dataIndex:a,title:Object(r.capitalize)((t.lang||o.defaultLang).singular),render:e=>e?Object(o.schemeLens)(t).get(Object(n.a)().getState())[e].name:"REF IS EMPTY"}})},"./src/grids/grid/pureGrid.ts":function(e,a,t){"use strict";var n=t("./src/grids/pureTree.ts"),o=t("./src/grids/grid/Grid.tsx"),r=t("./src/grids/grid/columns.ts");a.a=((e,a)=>Object(n.a)(e).of(Object(o.b)(Object(r.a)(e).create(a))))},"./src/grids/grid/renderers.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/moment/moment.js")),r=t.n(o),s=t("./src/styles/font.ts"),i=t("./node_modules/styled-components/dist/styled-components.es.js");const l=i["a"].div`
    text-align: right;
`,d=Object(s.caption)()(l);a.a={date:e=>n.createElement(d,null,r()(e).format("DD MMM YYYY"))}},"./src/grids/list/List.tsx":function(e,a,t){"use strict";a.a=function(e){return(a=class extends l.a{constructor(e){super(e),this.onRowClick=(e=>()=>{this.props.onRowClick&&this.props.onRowClick(e,this)}),this.renderRow=((e,a,t)=>n.createElement(k,{pointer:!this.isSelectionDisabled(e),hover:this.props.hover,key:this.getId(e),noDividers:this.props.noDividers},this.renderSelectionCell(e),n.createElement(j,{onClick:this.onRowClick(e)},Object(c.a)(this.props.render(e,this),this.props)),this.props.expandedRowRender&&n.createElement(x,null,n.createElement(i.a,{value:this.state.expandedKeys.includes(this.getId(e)),onChange:a=>this.toggleRowExpand(e)})))),this.renderExpandRow=((e,a,t)=>this.state.expandedKeys.includes(this.getId(e))?n.createElement(k,{noDividers:this.props.noDividers},n.createElement("td",{colSpan:99,style:{paddingLeft:this.props.expansionPadding,paddingTop:0,paddingBottom:0,paddingRight:0}},Object(c.a)(this.props.expandedRowRender(e,this.getId(e),this),this.props))):null),this.changeHandler=(e=>a=>{const{onChange:t,mode:n,idKey:o,data:r,value:s}=this.props,i=this.getId(e);"select"===n?t([i]):s.includes(i)?t(s.filter(e=>e!==i)):t([...s,i])}),this.renderSelectionCell=(e=>{const{mode:a,idKey:t,data:o,value:s}=this.props,i=e[t];return""!==a?n.createElement(r.a,{inversed:this.props.inversedSelection,selected:s.includes(i),radio:"select"===a,onChange:this.changeHandler(e)}):null}),this.renderPagination=(()=>{const{offset:e,maxRows:a}=this.state;return n.createElement(d.a,{offset:e,total:this.getTotalRowsAmount(),maxRows:a,maxRowsItems:this.props.maxRowsItems,onOffsetChange:this.handleChangePage,onMaxRowsChange:this.handleChangeRowsPerPage})}),this.state={offset:e.offset||0,maxRows:e.maxRows||10,expandedKeys:e.expandedKeys||[]}}render(){const e=this.props,{data:a,idKey:t,value:o,mode:r,onChange:i,onRowClick:l,emptyText:d,height:u,width:c,expansionPadding:m,render:p,expandedRowRender:h}=e,_=f(e,["data","idKey","value","mode","onChange","onRowClick","emptyText","height","width","expansionPadding","render","expandedRowRender"]),v=this.getVisibleRows().map(this.renderItem);return this.props.withPagination?n.createElement("div",null,n.createElement(b,Object.assign({},_),n.createElement("tbody",null,v)),this.renderPagination()):n.createElement(s.a,Object.assign({},_,{height:u,style:{width:c,maxWidth:c}}),n.createElement(b,{noDividers:this.props.noDividers},n.createElement("tbody",null,v)))}}).defaultProps={maxRowsItems:[5,10,50,100],maxRows:5,offset:0,data:[],value:[],hover:!0,mode:"",onChange:console.log,expansionPadding:"64px",expandedKeys:[],scheme:e,idKey:e?e.uniqueProperty:null,render:a=>e?e.getFullName(a)():a.name?a.name:JSON.stringify(a)},a;var a};var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/styled-components/dist/styled-components.es.js")),r=t("./src/grids/SelectionCell.tsx"),s=t("./src/controls/CustomScrollbar.tsx"),i=t("./src/controls/ExpansionButton.tsx"),l=t("./src/grids/Expandable.ts"),d=t("./src/pagination/Pagination.tsx"),u=t("./src/smart/caseRender.ts"),c=t("./src/smart/renderChildren.ts"),m=t("./src/grids/styles.ts"),p=t("./src/styles/colors.ts"),f=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)a.indexOf(n[o])<0&&(t[n[o]]=e[n[o]])}return t};const h=o["a"].table`
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    border-spacing: 0;
    border-collapse: collapse;
    color: rgba(0, 0, 0, 0.87);
    border-top: 1px solid ${p.m.LIGHT_BORDER_GRAY};
    width: 100%;
    font-size: 13px;
`,_=Object(o["a"])(h)`
    border-top: none;
`,b=Object(u.a)(h).match(e=>!0===Boolean(e.noDividers),_),v=o["a"].tr`
	height: 40px;
	text-align: left;
    border-bottom: 1px solid ${p.m.LIGHT_BORDER_GRAY};
	background-color: #FFFFFF;
    padding-top: 0px;
    padding-bottom: 0px;
	width: 100%;
`,y=Object(o["a"])(v)`
    border-top: none;
`,g=Object(u.a)(v).match(e=>!0===Boolean(e.noDividers),y),k=Object(m.f)(g),j=o["a"].td`
    vertical-align: middle;
    padding-left: 24px;
    padding-top: 0px;
    padding-bottom: 0px;
`,x=o["a"].td`
    vertical-align: middle;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 0px;
    padding-bottom: 0px;
    width: 24px;
`},"./src/grids/pureTree.ts":function(e,a,t){"use strict";var n=t("./src/smart/Pure.ts"),o=t("./src/smart/makeValue.ts"),r=t("./node_modules/ramda/index.js"),s=(t.n(r),t("./src/grids/Expandable.ts")),i=t("../utils/dist/index.js");t.n(i);a.a=(e=>Object(o.a)([]).addProps({scheme:e}).addProps().addProps({title:"Таблица"}).addState().addMsg((()=>({onModeChange:Object(n.b)("onModeChange")}))()).addReducer((e,a)=>"onModeChange"===a.type?Object.assign({},e,{value:[],mode:a.payload}):e.mode?e:Object.assign({},e,{mode:s.b.VIEW})).recieveProps((e,a,t)=>{if(t.idKey&&a.data!==t.data){const n=Array.isArray(t.data)?t.data:Object(i.toIndexedArray)(t.data),o=Object(r.map)(e=>e[a.idKey],n),s=e.value.filter(e=>o.includes(e));return Object.assign({},e,{value:s,data:t.data})}return a.data!==t.data?Object.assign({},e,{data:t.data}):e}))},"./src/grids/styles.ts":function(e,a,t){"use strict";t.d(a,"a",function(){return n}),t.d(a,"b",function(){return r});var n,o,r,s,i=t("./node_modules/material-ui/Table/index.js"),l=(t.n(i),t("./node_modules/material-ui/styles/index.js")),d=(t.n(l),t("./src/styles/restyle.ts")),u=t("./node_modules/ramda/index.js"),c=(t.n(u),t("./src/layout/Table.tsx")),m=t("./node_modules/styled-components/dist/styled-components.es.js");(o=n||(n={})).leftAlign="grid-cell-left-align",o.rightAlign="grid-cell-right-align",o.centerAlign="grid-cell-center-align",o.short="grid-cell-short",o.icon="grid-cell-short-extra",o.noCellPadding="grid-no-cell-padding",o.sortableCell="grid-cell-with-sort-icon",o.minWidth="grid-cell-min-width",(s=r||(r={})).grayBgColor="grid-row-gray-background",s.readonly="grid-row-readonly",s.refRawHeader="grid-header-ref-row",s.refRaw="grid-ref-row",s.expandedRaw="grid-ref-expanded-row",s.paperHeaderRaw="grid-paper-like-header";const p=Object(u.compose)(d["a"]`
        &:hover {
            ${({hover:e})=>e?"box-shadow: 0 -1px rgba(0, 0, 0, 0.075);background: #eeeeee;":""}
        }

        ${({pointer:e})=>e?"cursor: pointer;":""}

        &.${r.grayBgColor} {
            background-color: #ECECEC!important;
            color: rgba(0,0,0,0.54)!important;
        }

        &.${r.readonly} {
            cursor: default;
        }

         &.${r.refRawHeader} {
            height: 40px;
        }

        &.${r.refRaw} {
            height: 48px;

            &:hover{
                background-color: #F5F5F5;
            }
        }

        &.${r.expandedRaw} {
            background-color: rgba(245,245,246,0.56);
        }

        &.${r.paperHeaderRaw} {
            border-radius: 2px;
            background-color: #ffffff;
        }
    `,Object(l.withStyles)({root:{height:40}}));a.f=p;a.d=(e=>Object(m["a"])(e)`
    box-sizing: border-box;
    text-align: left;
    white-space: nowrap;
    border-bottom: 1px solid rgba(0, 0, 0, 0.075);
    text-overflow: ellipsis;

    text-align: left;
    padding: 0 24px 0 0;

    &:first-child {
        padding: 0 24px;
    }

    & ~ & {
        padding: 0 24px;
        text-align: right;
    }

    ${e===c.b?"\n            position: relative;\n            white-space: pre;\n            font-weight: 500;\n        ":""}

    &.${n.short} {
        width: 70px;
        padding: 0;
    }

    &.${n.leftAlign} {
        text-align: left;
    }

    &.${n.rightAlign} {
        text-align: right;
    }

    &.${n.centerAlign} {
        text-align: center;
    }

    &.${n.noCellPadding} {
        padding: 0 0 0 21px !important;

        &:last-child {
            padding-right: 24px !important;
        }
    }

    &.${n.sortableCell} {
        margin: 0;
        display: inline-flex;
        align-items: center;
        cursor: pointer;
    }

    &.${n.minWidth} {
        width: 1%;
    }

    &.${n.icon} {
        width: 1px;
        &:first-child {
            padding: 0 0 0 20px;
        }
        &:last-child {
            padding: 0;
        }
    }
`);a.e=(e=>Object(m["a"])(e)`
    box-sizing: border-box;
    padding: 0 0 0 9px;
    width: 57px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.075);
`);const f=p(i.TableRow);a.c=f},"./src/inputs/CoordinatePicker.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/inputs/CoordinatePickerUnit.tsx")),r=t("./src/inputs/contextedInput.ts"),s=t("./src/smart/caseRender.ts"),i=t("./src/inputs/CoordinatePickerReadonly.tsx");const l=e=>a=>({key:e,pickerType:e,onChange:(({onChange:e,value:a})=>t=>n=>e(Object.assign({},a,{[t]:n})))(a)(e),value:(({value:e})=>a=>e?e[a]:"")(a)(e),coordinateType:(({value:e})=>e?e.coordinateType:o.c.dms)(a),onCoordinateTypeChange:(({onChange:e,value:a})=>t=>e(Object.assign({},a,{coordinateType:t})))(a)}),d=Object(s.a)(e=>[n.createElement(o.h,Object.assign({},l(o.a.latitude)(e))),n.createElement(o.h,Object.assign({},l(o.a.longitude)(e)))]).match(e=>e.readonly,e=>[n.createElement(i.a,Object.assign({},l(o.a.latitude)(e))),n.createElement(i.a,Object.assign({},l(o.a.longitude)(e)))]);a.a=Object(r.a)(d)},"./src/inputs/CoordinatePickerReadonly.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/styles/restyle.ts")),r=t("./src/styles/colors.ts"),s=t("./src/inputs/CoordinatePickerUnit.tsx"),i=t("./src/layout/Div.tsx"),l=t("./src/inputs/InputReadonly.tsx");const d=o["a"]`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
`(i.a),u=o["a"]`
    font-size: 12px;
    color: ${r.m.SOFT_BLACK};
`(i.a),c=o["a"]`
    font-family: Roboto;
    font-size: 14px;
    margin-left: 26px;
    color: ${r.m.SOFT_BLACK};
`(i.a),m=o["a"]`
    display: flex;
    flex-direction: row;

    > *:not(:last-child) {
        padding-right: 10px;
    }
`(i.a),p=({value:e})=>n.createElement(m,null,n.createElement(l.c,{label:"Градусы °",value:Object(s.e)(e).toString()}),n.createElement(l.c,{label:"Минуты '",value:e?Math.trunc(Object(s.f)(e)).toString():""}),n.createElement(l.c,{label:"Секунды ''",value:Object(s.g)(e).toString()})),f=({value:e})=>n.createElement(m,null,n.createElement(l.c,{label:"Градусы °",value:Object(s.d)(e).toString()})),h=({value:e})=>n.createElement(m,null,n.createElement(l.c,{label:"Градусы °",value:Object(s.e)(e).toString()}),n.createElement(l.c,{label:"Минуты '",value:Object(s.f)(e).toString()}));a.a=(e=>n.createElement(s.b,null,e.value?n.createElement("div",null,n.createElement(d,null,n.createElement(u,{shrink:!0}," ",Object(s.i)(e.pickerType)),n.createElement(c,null,e.value>0?Object(s.j)(e.pickerType):Object(s.k)(e.pickerType))),(({value:e,coordinateType:a})=>a===s.c.ddd?f({value:e}):a===s.c.ddm?h({value:e}):p({value:e}))(e)):n.createElement(l.c,{label:Object(s.i)(e.pickerType)})))},"./src/inputs/CoordinatePickerUnit.tsx":function(e,a,t){"use strict";t.d(a,"c",function(){return n}),t.d(a,"a",function(){return r});var n,o,r,s,i=t("./node_modules/react/index.js"),l=(t.n(i),t("./node_modules/styled-components/dist/styled-components.es.js")),d=t("./src/styles/index.ts"),u=t("./src/layout/Div.tsx"),c=t("./src/styles/SVGLibrary.tsx"),m=t("./src/controls/DropdownMenu.tsx"),p=t("./node_modules/material-ui/IconButton/index.js"),f=t.n(p),h=t("./node_modules/material-ui/Input/index.js"),_=t.n(h),b=t("./src/styles/colors.ts");(o=n||(n={})).dms="dms",o.ddm="ddm",o.ddd="ddd",(s=r||(r={})).longitude="longitude",s.latitude="latitude";const v=d["f"]`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
`(u.a),y=d.b.FontFamily(l["a"].button`
    color: ${({active:e})=>e?b.b:b.j};
    background: none;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 20px;
    margin-left: 8px;
    padding: 0 14px;
    height: 26px;
    outline: none;
    display: flex;
    align-items: center;
    text-align: center;
    border: 1px solid ${({active:e})=>e?b.b:b.k};
    border-radius: 2px;
    cursor: pointer;

    &:disabled {
        cursor: default;
        color: ${b.d};
    }
`),g=d["f"]`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: ${b.j};
    font-family: Roboto;
    font-size: 12px;
`(u.a),k=d["f"]`
    width: 100%;
`(u.a);a.b=k;const j=d["f"]`
    height: 56px;
    overflow: hidden;
    border-radius: 4px;
`(u.a),x=d["f"]`
    padding: 0 12px 0 16px;
    display: flex;
    height: 56px;
    align-items: flex-end;
    background-color: ${b.m.HEAVY_LIGHT_GRAY};
    position: relative;
    justify-content: space-between;

    &:after {
        content: '';
        height: 2px;
        bottom: 0;
        left: 0;
        position: absolute;
        background-color: ${e=>e.focused?b.m.DEEP_BLUE:b.m.UNDERLINE_GRAY};
        width: 100%;
    }
`(u.a),w=d.b.FontFamily(l["a"].span`
    color: ${b.c};
    font-size: 15px;
    margin-right: 32px;
`),M=d["f"]`
    width: 77px!important;

    &::before {
        color: transparent!important;
    }
`(_.a),S=d["f"]`
    width: 72px !important;
`(_.a),L=d["f"]`
    width: 76px !important;
`(_.a),z=d["f"]`
    position: absolute;
    top: ${e=>e.shrink?"10px":"21px"};
    color: ${e=>e.focused?b.m.DEEP_BLUE:b.m.SOFT_BLACK}!important;
    transition: top 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
`(h.InputLabel),T=e=>{if(!e&&0!==e)return"";const a=e/36e5;return-1===a.toString().indexOf(".")?(a+1e-5).toFixed(1):a.toString().length>7?a.toFixed(4):a};a.d=T;const E=e=>{if(!e&&0!==e)return"";let a=e%36e5;return-1===(a/=6e4).toString().indexOf(".")?`${a}.0 `:a.toString().length>7?Math.round(a*Math.pow(10,4))/Math.pow(10,4):a};a.f=E;const D=e=>e||0===e?Math.floor(e/36e5):"";a.e=D;const P=e=>e||0===e?(e%36e5%6e4/1e3).toFixed(1):"";a.g=P;const O=e=>e===r.latitude?"Широта":"Долгота";a.i=O;const A=e=>e===r.latitude?"с.ш.":"в.д.";a.j=A;const C=e=>e===r.latitude?"ю.ш.":"з.д.";a.k=C;class N extends i.Component{constructor(e){super(e),this.onValueChangeCb=(e=>this.props.onChange(1===this.state.option?e.toString():(0-e).toString())),this.onCoordTypeChangeCb=(e=>{this.props.onCoordinateTypeChange?this.props.onCoordinateTypeChange(e):this.setState({coordinateType:e})}),this.renderLabel=(()=>i.createElement(v,null,i.createElement(h.InputLabel,{shrink:this.state.value||this.state.focused},O(this.props.pickerType)),i.createElement(g,null,i.createElement(y,{active:1===this.state.option,onClick:()=>{this.props.onChange(this.state.value.toString()),this.setState({option:1})}},A(this.props.pickerType)),i.createElement(y,{active:2===this.state.option,onClick:()=>{this.props.onChange((0-this.state.value).toString()),this.setState({option:2})}},C(this.props.pickerType))))),this.onDropDownItemClick=(e=>{this.onCoordTypeChangeCb(e)}),this.getDropDownMenuData=(()=>[{renderLabel:()=>i.createElement(w,null,"Градусы, Минуты, Секунды"),onChange:()=>this.onDropDownItemClick(n.dms)},{renderLabel:()=>i.createElement(w,null,"Градусы, Десятичные минуты"),onChange:()=>this.onDropDownItemClick(n.ddm)},{renderLabel:()=>i.createElement(w,null,"Десятичные градусы"),onChange:()=>this.onDropDownItemClick(n.ddd)}]),this.renderPickerRow=(()=>i.createElement(j,null,i.createElement(x,{focused:this.state.focused,readonly:this.props.readonly},i.createElement("span",null,this.renderPickerInputs()),i.createElement(m.a,{data:this.getDropDownMenuData()},i.createElement(f.a,{style:{marginRight:"-12px",marginBottom:"4px"}},i.createElement(c.b.DropdownDown,null)))))),this.renderDMS=(()=>i.createElement("span",{onFocus:()=>this.setState({focused:!0}),onBlur:()=>this.setState({focused:!1})},i.createElement(z,{focused:this.state.focused,shrink:this.state.value||0===this.state.value||this.state.focused},"Градусы °"),i.createElement(M,{disableUnderline:!0,value:D(this.state.value),placeholder:this.state.focused?"Градусы °":"",onChange:this.handleDDMDegreeChange}),i.createElement(z,{focused:this.state.focused,shrink:this.state.value||0===this.state.value||this.state.focused},"Минуты '"),i.createElement(S,{disableUnderline:!0,value:this.state.value||0===this.state.value?Math.trunc(E(this.state.value)):"",placeholder:this.state.focused?"Минуты '":"",onChange:this.handleDMSMinutesChange}),i.createElement(z,{focused:this.state.focused,shrink:this.state.value||0===this.state.value||this.state.focused},"Секунды ''"),i.createElement(L,{disableUnderline:!0,value:P(this.state.value),placeholder:this.state.focused?"Секунды ''":"",onChange:this.handleDMSSecondChange}))),this.renderDDM=(()=>i.createElement("span",{onFocus:()=>this.setState({focused:!0}),onBlur:()=>this.setState({focused:!1})},i.createElement(z,{focused:this.state.focused,shrink:this.state.value||0===this.state.value||this.state.focused},"Градусы °"),i.createElement(M,{disableUnderline:!0,onChange:this.handleDDMDegreeChange,placeholder:this.state.focused?"Градусы °":"",value:D(this.state.value)}),i.createElement(z,{focused:this.state.focused,shrink:this.state.value||0===this.state.value||this.state.focused},"Минуты '"),i.createElement(S,{disableUnderline:!0,placeholder:this.state.focused?"Минуты '":"",value:E(this.state.value),onChange:this.handleDDMMinutesChange}))),this.renderDDD=(()=>i.createElement("span",{onFocus:()=>this.setState({focused:!0}),onBlur:()=>this.setState({focused:!1})},i.createElement(z,{focused:this.state.focused,shrink:this.state.value||0===this.state.value||this.state.focused},"Градусы °"),i.createElement(M,{onChange:this.handleDDDChange,disableUnderline:!0,placeholder:this.state.focused?"Градусы °":"",value:T(this.state.value)}))),this.renderPickerInputs=(()=>this.state.coordinateType===n.ddd?this.renderDDD():this.state.coordinateType===n.ddm?this.renderDDM():this.renderDMS()),this.handleDDDChange=(e=>{let a=e.target.value.replace(",",".");a=this.roundWithPrecision(5,a);const t=this.props.pickerType===r.latitude?90:180,n=a>=t?Math.floor(36e5*t):Math.floor(36e5*a);this.onValueChangeCb(n),this.setState({value:n})}),this.handleDDMDegreeChange=(e=>{let a=e.target.value?parseInt(e.target.value,10):0;const t=this.props.pickerType===r.latitude?90:180,n=this.state.value?this.state.value%36e5:0;a>t&&(a=0===n?t:t-1),this.onValueChangeCb(n+36e5*a),this.setState({value:n+36e5*a})}),this.roundDegrees=(e=>{if(this.state.value){const a=this.props.pickerType===r.latitude?90:180,t=this.state.value,n=t-Math.floor(t).toFixed(8);return e>=a?n>0?a-1:a:Math.floor(e)}return e}),this.handleDDMMinutesChange=(e=>{let a=e.target.value?e.target.value.replace(/[^0-9$.]/g,""):0;a=this.roundWithPrecision(4,this.removeExtraCommas(a));const t=(this.state.value?36e5*Math.floor(this.state.value/36e5):0)+Math.floor(6e4*a);this.onValueChangeCb(t),this.setState({value:t})}),this.handleDMSSecondChange=(e=>{let a=e.target.value?e.target.value.replace(/[^0-9$.]/g,""):0;if(a=this.roundWithPrecision(1,this.removeExtraCommas(a)),!this.state.value)return void this.setState({value:1e3*a});const t=36e5*Math.trunc(this.state.value/36e5)+(this.state.value%36e5-this.state.value%36e5%6e4)+1e3*a;this.onValueChangeCb(t),this.setState({value:t})}),this.handleDMSMinutesChange=(e=>{const a=isNaN(parseInt(e.target.value,10))?0:parseInt(e.target.value,10)>59?59:parseInt(e.target.value,10),t=this.state.value?this.state.value%36e5%6e4:0,n=6e4*a,o=(this.state.value?36e5*Math.trunc(this.state.value/36e5):0)+n+t;this.onValueChangeCb(o),this.setState({value:o})}),this.roundToLastActualFract=((e,a)=>{const t=a?e.toFixed(a):e.toFixed(6);let n=t.toString().indexOf(".")>-1?t.toString().split(".")[1].length:0;for(;n>0&&"0"===t.toString().split(".")[1][n-1];)n--;return e.toFixed(n)}),this.removeExtraCommas=(e=>{let a=e;a.split(".").length>2&&(a=`${a.split(".")[0]}.${a.split(".").slice(1).join("")}`);return a}),this.roundWithPrecision=((e,a)=>{let t=a;t.split(".").length>1&&t.split(".")[1].length>e&&(t=`${t.split(".")[0]}.${t.split(".")[1].slice(0,-1)}`);return t}),this.state={coordinateType:e.coordinateType,value:Math.abs(parseFloat(e.value)),option:isNaN(parseFloat(e.value))||parseFloat(e.value)>=0?1:2,focused:!1}}componentWillReceiveProps(e){const{coordinateType:a}=e;a!==this.state.coordinateType&&this.setState({coordinateType:a})}render(){return i.createElement(k,null,this.renderLabel(),this.renderPickerRow())}}N.defaultProps={coordinateType:n.dms,focused:!1},a.h=N},"./src/inputs/DateInput.tsx":function(e,a,t){"use strict";var n=t("./src/inputs/TextInput.tsx"),o=t("./src/smart/props.ts"),r=t("./node_modules/moment/moment.js");t.n(r);a.a=Object(o.a)(n.a).defaultProp("type","date").defaultProp("formatter",e=>e&&r(e).format("LL"))},"./src/inputs/DateRangePicker.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/styles/restyle.ts")),r=t("./src/layout/Div.tsx"),s=t("./node_modules/moment/moment.js"),i=(t.n(s),t("./src/inputs/DateInput.tsx"));const l=o["a"]`
    display: flex;
    flex-direction: row;
`(r.a);a.a=class extends n.Component{constructor(e){super(e),this.onStartChange=(e=>{this.setState({start:e?s(e,"YYYY-MM-DD").format("YYYY-MM-DD"):void 0},()=>this.props.onChange(Object.assign({},this.state)))}),this.onEndChange=(e=>this.setState({end:e?s(e,"YYYY-MM-DD").format("YYYY-MM-DD"):void 0},()=>this.props.onChange(Object.assign({},this.state)))),this.state={start:this.props.start,end:this.props.end}}render(){return n.createElement(l,null,n.createElement("div",{style:{marginRight:"24px"}},n.createElement(i.a,{value:this.state.start&&s(this.state.start).format("YYYY-MM-DD"),error:this.props.required&&!this.state.start,label:this.props.required&&!this.state.start?"Необходимо ввести дату начала":"Дата начала",onChange:this.onStartChange})),n.createElement(i.a,{value:this.state.end&&s(this.state.end).format("YYYY-MM-DD"),label:s(this.state.end).isBefore(s(this.state.start))?"Дата окончания меньше даты начала":"Дата окончания",error:s(this.state.end).isBefore(s(this.state.start)),onChange:this.onEndChange}))}}},"./src/inputs/GenericInput.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/inputs/TextInput.tsx")),r=t("./src/smart/caseRender.ts"),s=t("./src/inputs/NumberInput.tsx"),i=t("./src/inputs/RefInput.tsx"),l=t("./src/inputs/DateRangePicker.tsx"),d=t("./src/inputs/DateInput.tsx"),u=t("./node_modules/moize/es/index.js"),c=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)a.indexOf(n[o])<0&&(t[n[o]]=e[n[o]])}return t};const m=Object(r.a)(o.a).match(e=>"number"===e.meta.type,s.a).match(e=>"itemOf"===e.meta.type,e=>{var{meta:a}=e,t=c(e,["meta"]);return n.createElement(i.a,Object.assign({},t))}).match(e=>"datetime"===e.meta.type||"date"===e.meta.type,d.a).match(e=>"daterange"===e.meta.type,l.a),p=e=>{var{meta:a}=e,t=c(e,["meta"]);return n.createElement(m,Object.assign({label:a.langRU,required:a.required},t,{meta:a}))},f=Object(u.a)(e=>{const a=e.scheme;a.properties[e.property];return n.createElement(p,Object.assign({},e,{meta:a.properties[e.property]}))},{maxSize:100,isReact:!0});window.memoGenericInput=f,a.a=f},"./src/inputs/InputReadonly.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/styles/restyle.ts")),r=t("./src/layout/index.ts"),s=t("./node_modules/ramda/index.js"),i=(t.n(s),t("./src/styles/index.ts")),l=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)a.indexOf(n[o])<0&&(t[n[o]]=e[n[o]])}return t};const d=o["a"]`
    color: ${i.e.EXTRA_SOFT_BLACK};
    font-family: Roboto;
    font-size: 12px;
    margin-bottom: 12px;
`(r.a);a.a=d;const u=o["a"]`
    margin-top: 4px;
    color: ${i.e.DEFAULT_BLACK};
    font-family: Roboto;
    font-size: 16px;
    line-height: 1.5em;
    min-height: 1.5em;
`(r.a),c=o["a"]`
    color: ${i.e.EXTRA_SOFT_BLACK};
    font-size: 16px;
    line-height: 1.5em;
`(r.a);a.b=c;const m=e=>{var{formatter:a,value:t,label:o}=e;l(e,["formatter","value","label"]);return n.createElement(d,null,o,n.createElement(u,null,(e=>Object(s.compose)(e=>e||n.createElement(c,null,"—"),e))(a)(t)))};m.defaultProps={formatter:s.identity},a.c=m},"./src/inputs/LiteTextInput.tsx":function(e,a,t){"use strict";var n=t("./src/smart/caseRender.ts"),o=t("./src/inputs/contextedInput.ts"),r=t("./node_modules/react/index.js"),s=(t.n(r),t("./node_modules/styled-components/dist/styled-components.es.js")),i=t("./src/styles/index.ts"),l=t("./src/layout/Div.tsx"),d=t("./src/styles/SVGLibrary.tsx"),u=t("./src/styles/colors.ts"),c=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)a.indexOf(n[o])<0&&(t[n[o]]=e[n[o]])}return t};const m={value:"",icon:d.b.Edit,onChange:e=>null},p=i["f"]`
    display: inline-flex;
    align-items: stretch;
    position: relative;
    cursor: pointer;
    width: 100%
`(l.a),f=i["f"]`
    position: absolute;
    top: 28px;
    color: ${u.m.LIGHT_RED};
    font-size: 12px;
`(l.a),h=e=>{var{value:a,onChange:t,error:n,helperText:o,icon:s,limit:i,disabled:l,readonly:d}=e,u=c(e,["value","onChange","error","helperText","icon","limit","disabled","readonly"]);const m=s;return r.createElement(p,Object.assign({},u),r.createElement("input",{className:n?"editableInput error":"editableInput",type:"text",value:a,onChange:t,disabled:l,maxLength:i}),!l&&r.createElement("label",{className:"inputLable"},r.createElement(m,null)),n&&r.createElement(f,null,o))};h.defaultProps=m;const _=Object(s["a"])(h)`

.editableInput {
  background: transparent;
  padding: 10px 44px 10px 0px;
  color: ${u.m.DEFAULT_BLACK};
  font-family: Roboto;
  font-size: 13px;
  line-height: 15px;
  border: none;
  border: 2px solid transparent;
  width: 100%;
  cursor: pointer;
}

.editableInput:disabled {
    color: ${u.m.SOFT_BLACK};
}


.editableInput:focus {
  color: ${u.m.SIMPLE_BLACK};
  outline: none;
}

.inputLable {
  position: absolute;
  right: 10px;
  top: calc(50% - 12px);
  opacity: 0;
  color: ${u.m.PRIMARY};
  font-size: 1.5em;
  cursor: pointer;
  transition: opacity .2s ease-in;
}

.inputLable:hover,
.editableInput:focus + .inputLable,
.editableInput:hover + .inputLable {
  opacity: 1;
}
`,b=Object(n.a)(_).match(e=>e.readonly||e.disabled,({value:e})=>r.createElement("div",{style:{float:"left"}},e));a.a=Object(o.a)(b)},"./src/inputs/NumberInput.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/material-ui/TextField/index.js")),r=t.n(o),s=t("./src/smart/caseRender.ts"),i=t("./src/inputs/InputReadonly.tsx"),l=t("./src/inputs/contextedInput.ts");class d extends n.Component{constructor(e){super(e),this.onChange=(e=>{let a=e.target.value.replace(",",".");(0!==(a="-"===a[0]?`-${a.replace(/[^0-9$.]/g,"")}`:a.replace(/[^0-9$.]/g,"")).split(".")[0].length&&"-"!==a.split(".")[0]||(a=`${a.split(".")[0]}${a.split(".").slice(1).join("")}`),a.split(".").length>2)&&(a=`${a.split(".")[0]}.${a.split(".").slice(1).join("")}`);this.setState({value:a},()=>this.props.onChange(this.state.value))}),this.onBlur=(()=>this.setState({value:isNaN(parseFloat(this.state.value))?"":parseFloat(this.state.value)},()=>this.props.onChange(this.state.value))),this.getHelperText=(()=>{if(this.isInvalid()){if(this.props.minValue&&this.props.maxValue)return`${this.props.minValue} - ${this.props.maxValue}`;if(this.props.minValue)return`> ${this.props.minValue}`;if(this.props.maxValue)return` < ${this.props.maxValue}`}return""}),this.isInvalid=(()=>this.props.minValue&&parseFloat(this.state.value)<this.props.minValue||this.props.maxValue&&parseFloat(this.state.value)>this.props.maxValue),this.state={value:this.props.value}}render(){return n.createElement(r.a,Object.assign({},this.props,{value:this.state.value,onChange:this.onChange,onBlur:this.onBlur,helperText:this.getHelperText(),error:this.isInvalid()}))}}a.a=d;const u=Object(s.a)(d).match(e=>e.readonly,i.c);a.b=Object(l.a)(u)},"./src/inputs/PopUpDescriptionInput.ts":function(e,a,t){"use strict";var n=t("./node_modules/recompose/es/Recompose.js"),o=t("./src/inputs/PopupInput.tsx");const r=Object(n.b)({type:"description"})(o.a);a.a=r},"./src/inputs/PopUpNameInput.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/smart/defaultProps.ts")),r=t("./src/inputs/PopupInput.tsx");const s=Object(o.a)({type:"name"})(r.a);n.createElement(s,null);a.a=s},"./src/inputs/PopupInput.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/styles/index.ts")),r=t("./src/layout/index.ts"),s=t("./src/inputs/PopupInputModal.tsx"),i=t("./src/inputs/contextedInput.ts");const l=o["f"]`
    transition: ${o.a.defaultTransition("color")};
    &:hover,
    &:hover > * {
        color: ${o.e.DEFAULT_BLACK} !important;
        text-decoration: underline;
        cursor: pointer;
    }
`(r.h),d=o.b.headLine(o["f"]`
    margin-right: 27px;
`)(r.a),u=o.b.caption2(o["f"]`
    margin-bottom: 5px;
`)(l),c=o.b.caption2(o["f"]`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
`)(l),m=o["f"]`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
`(r.a),p=o["f"]`
    text-align: right;
`(r.h),f=o["f"]`
    margin-left: 10px;
    width: 16px !important;
    height: 16px !important;
    color: ${o.e.DISABLED_GRAY} !important;
    transition: ${o.a.defaultTransition("color")} !important;
`(o.c.Message);a.a=Object(i.a)(class extends n.Component{constructor(e){super(e),this.renderModal=(()=>this.state.modalShown&&n.createElement(s.a,{value:this.state.value,title:this.props.title,label:this.props.label,type:"name"===this.props.type?"name":"description",limit:"description"===this.props.type&&170,onSave:this.onSave,onCancel:this.toggleModal(!1)})),this.renderName=(()=>n.createElement(m,null,n.createElement(d,null,this.props.value),!this.props.readonly&&n.createElement(u,{onClick:this.toggleModal(!0)},"Ред."))),this.renderDescription=(()=>n.createElement(c,{onClick:this.toggleModal(!0)},n.createElement(p,null,this.state.value),n.createElement(f,null))),this.onSave=(e=>{this.setState({value:e,modalShown:!1}),this.props.onChange(e)}),this.toggleModal=(e=>()=>this.setState({modalShown:e})),this.state={modalShown:!1,value:this.props.value}}render(){return n.createElement("div",null,"name"===this.props.type?this.renderName():this.renderDescription(),this.renderModal())}})},"./src/inputs/PopupInputModal.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/styles/restyle.ts")),r=t("./src/layout/Div.tsx"),s=t("./src/layout/ModalListDialog.tsx"),i=t("./src/inputs/TextInput.tsx"),l=t("./src/controls/Button.tsx");const d=o["a"]`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    background-color: ${t("./src/styles/colors.ts").m.SOFT_BLACK};
`(r.a);a.a=class extends n.Component{constructor(e){super(e),this.onChange=(e=>{const a=(this.validateEmpty(e)?!this.validateLength(e)&&`Длина описания не должна превышать ${this.props.limit} символов`:"Поле не должно быть пустым")||"";this.setState({value:e,error:!(this.validateEmpty(e)&&this.validateLength(e)),errorText:a})}),this.validateEmpty=(e=>"name"!==this.props.type||e.length>0),this.validateLength=(e=>!this.props.limit||e.length<=this.props.limit),this.state={value:this.props.value,error:!1,errorText:""}}render(){return n.createElement(d,null,n.createElement(s.b,null,n.createElement(s.d,null,this.props.title),n.createElement(i.a,{onChange:this.onChange,error:this.state.error,label:this.state.error?this.state.errorText:this.props.label,style:{height:70},value:this.state.value}),n.createElement(s.a,null,n.createElement(l.a,{color:"inherit",disabled:this.state.error,onClick:()=>this.props.onSave(this.state.value)},"Сохранить"),n.createElement(s.c,null),n.createElement(l.a,{color:"inherit",onClick:this.props.onCancel},"Отмена"))))}}},"./src/inputs/RadioGroup.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/ramda/index.js")),r=(t.n(o),t("./node_modules/material-ui/Form/index.js")),s=(t.n(r),t("./node_modules/material-ui/Radio/index.js")),i=t.n(s),l=t("./src/layout/Span.tsx"),d=t("./src/styles/restyle.ts"),u=t("./src/inputs/contextedInput.ts"),c=t("./src/inputs/InputReadonly.tsx"),m=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)a.indexOf(n[o])<0&&(t[n[o]]=e[n[o]])}return t};const p=d["a"]`
    display: flex;
    flex-direction: row !important;
    align-items: center;
`(s.RadioGroup),f=(e,a)=>n.createElement(r.FormControlLabel,{key:a,value:e.value,control:n.createElement(i.a,null),label:e.label}),h=e=>{var{label:a,options:t}=e,o=m(e,["label","options"]);return n.createElement(r.FormControl,null,n.createElement(r.FormLabel,{component:l.a.Caption},a),n.createElement(p,Object.assign({},o),t.map(f)))},_=e=>{var{label:a,options:t}=e,r=m(e,["label","options"]);return n.createElement(c.c,{label:a.replace(" *",""),value:((e,a)=>Object(o.isEmpty)(a)?a:e.find(e=>String(e.value)===String(a)).label)(t,r.value)})};a.a=Object(u.a)(e=>e.readonly?n.createElement(_,Object.assign({},e)):n.createElement(h,Object.assign({},e)))},"./src/inputs/RefInput.tsx":function(e,a,t){"use strict";var n=t("../biz/dist/index.js"),o=(t.n(n),t("../utils/dist/index.js")),r=(t.n(o),t("./src/inputs/Select.tsx")),s=t("./node_modules/react-redux/es/index.js"),i=t("./node_modules/ramda/index.js");t.n(i);const l=e=>!e.removed;a.a=Object(s.b)((e,a)=>{try{const t=Object(n.getScheme)(a.scheme),r=Object(n.getScheme)(((e,a)=>Object(i.path)((e=>["properties",e,"schemeName"])(e))(a))(a.property,t));return{labelGetter:e=>r.getFullName?r.getFullName(e)():e.name,data:r.asMap(l)(e),label:a.label||Object(o.capitalize)(r.lang.singular),uniqueProperty:r.uniqueProperty}}catch(e){}return{}})(r.b)},"./src/inputs/Select.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/material-ui/Select/index.js")),r=t.n(o),s=t("./src/layout/MenuItem.tsx"),i=t("./node_modules/material-ui/Input/index.js"),l=t.n(i),d=t("../utils/dist/index.js"),u=(t.n(d),t("./node_modules/material-ui/Form/index.js")),c=(t.n(u),t("./src/inputs/contextedInput.ts")),m=t("./src/inputs/InputReadonly.tsx");const p=(e,a)=>n.createElement(s.a,{key:a,value:e},e),f=e=>n.createElement(l.a,{id:`select-${e}`}),h={PaperProps:{style:{maxHeight:"50vh"}}},_=e=>{const a=Math.random();return n.createElement(u.FormControl,{fullWidth:!0,error:e.error},n.createElement(i.InputLabel,{htmlFor:`select-${a}`},`${e.label}${e.required?" *":""}`),n.createElement(r.a,{value:e.value,onChange:({target:{value:a}})=>e.onChange(a),input:f(a),MenuProps:h},n.createElement(s.a,{value:""}),e.data.map(p)),n.createElement(u.FormHelperText,null,e.helperText))},b=e=>n.createElement(u.FormControl,{fullWidth:!0,error:e.error},n.createElement(i.InputLabel,{htmlFor:`select-${e.uniqueProperty}`},`${e.label}${e.required?" *":""}`),n.createElement(r.a,{value:e.value||"",onChange:({target:{value:a}})=>e.onChange&&e.onChange(a),input:f(e.uniqueProperty),MenuProps:h},n.createElement(s.a,{value:""}),Object(d.toIndexedArray)(e.data).map(((e,a,t)=>(o,r)=>n.createElement(s.a,{key:r,value:o[t]},a?a(o):o[e||"name"]))(e.labelPropName,e.labelGetter,e.uniqueProperty))),n.createElement(u.FormHelperText,null,e.helperText)),v=Object(c.a)(e=>e.readonly?n.createElement(m.c,Object.assign({},e)):n.createElement(_,Object.assign({},e)));a.a=v,a.b=Object(c.a)(e=>e.readonly?n.createElement(m.c,Object.assign({},e,{value:(({data:e,value:a,uniqueProperty:t,labelGetter:n,labelPropName:o})=>{const r=Object(d.toIndexedArray)(e).find(e=>e[t]===a);return r?n?n(r):r[o||"name"]:""})(e)})):n.createElement(b,Object.assign({},e)))},"./src/inputs/Switch.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/material-ui/Form/index.js")),r=(t.n(o),t("./node_modules/material-ui/Switch/index.js")),s=t.n(r),i=t("./src/inputs/contextedInput.ts"),l=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)a.indexOf(n[o])<0&&(t[n[o]]=e[n[o]])}return t};const d=e=>{var{value:a,disabled:t,readonly:o,onChange:r}=e,i=l(e,["value","disabled","readonly","onChange"]);return n.createElement(s.a,Object.assign({},i,{checked:a,onChange:(e,a)=>r&&r(a),disabled:t||o}))};a.a=Object(i.a)(e=>{var{label:a}=e,t=l(e,["label"]);return a?n.createElement(o.FormControlLabel,{control:d(t),label:a}):d(t)})},"./src/inputs/TextInput.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/material-ui/TextField/index.js")),r=t.n(o),s=t("./src/inputs/contextedInput.ts"),i=t("./src/smart/caseRender.ts"),l=t("./src/inputs/InputReadonly.tsx"),d=t("./node_modules/moize/es/index.js");const u=Object(i.a)(e=>n.createElement(r.a,Object.assign({value:e.value,inputProps:Object.assign({},e.inputProps,{maxLength:170}),style:{width:"100%"}},e,{onChange:a=>e.onChange(a.target.value),helperText:e.helperText||" "}))).match(e=>e.readonly,l.c),c=Object(s.a)(u),m=Object(d.a)(c,{maxSize:100,isReact:!0});window.memoTextInput=m,a.a=m},"./src/inputs/connectedInput.ts":function(e,a,t){"use strict";var n=t("../biz/dist/index.js"),o=(t.n(n),t("./node_modules/react-redux/es/index.js"));a.a=((e,a,t)=>Object(o.b)((t,o)=>({value:n.sel(e).bySpec(o.idOrSpec)(t)[a]}),(t,o)=>({onChange:r=>t(n.actions.update(e,o.idOrSpec,{[a]:r}))}))(t))},"./src/inputs/contextedInput.ts":function(e,a,t){"use strict";var n=t("./src/smart/contexted.ts"),o=t("./node_modules/prop-types/index.js");t.n(o);a.a=Object(n.a)({disabled:o.bool,readonly:o.bool})},"./src/inputs/index.ts":function(e,a,t){"use strict";var n=t("./src/inputs/TextInput.tsx");t.d(a,"g",function(){return n.a});t("./src/inputs/InputReadonly.tsx");var o=t("./src/inputs/CoordinatePicker.tsx");t.d(a,"a",function(){return o.a});t("./src/inputs/Switch.tsx");var r=t("./src/inputs/PopUpNameInput.tsx");t.d(a,"d",function(){return r.a});var s=t("./src/inputs/PopUpDescriptionInput.ts");t.d(a,"c",function(){return s.a});var i=t("./src/inputs/connectedInput.ts");t.d(a,"h",function(){return i.a});t("./src/inputs/contextedInput.ts");var l=t("./src/inputs/RadioGroup.tsx");t.d(a,"e",function(){return l.a});var d=t("./src/inputs/RefInput.tsx");t.d(a,"f",function(){return d.a});var u=t("./src/inputs/NumberInput.tsx");t.d(a,"b",function(){return u.b});t("./src/inputs/DateInput.tsx"),t("./src/inputs/DateRangePicker.tsx")},"./src/layout/Avatar.tsx":function(e,a,t){"use strict";var n=t("./node_modules/styled-components/dist/styled-components.es.js"),o=t("./src/layout/Div.tsx");const r=Object(n["a"])(o["a"])`
    min-height: ${({height:e})=>e}px;
    min-width: ${({width:e})=>e}px;
    background-color: ${t("./src/styles/index.ts").e.AVATAR_GRAY};
`;a.a=r},"./src/layout/Box.tsx":function(e,a,t){"use strict";var n=t("./src/styles/index.ts"),o=t("./src/layout/Div.tsx"),r=t("./node_modules/styled-components/dist/styled-components.es.js"),s=t("./node_modules/ramda/index.js"),i=(t.n(s),t("./node_modules/recompose/es/Recompose.js")),l=t("./src/styles/colors.ts"),d=t("./src/smart/declareProps.tsx");Object(s.compose)(i.c,s.omit)(["gap","stretch","marginAuto","reversed","bottomBorder","topBorder"]);const u=(e,a)=>t=>t[e]&&(a||e)+": "+(isNaN(t[e])?t[e]:t[e]+"px")+";",c=e=>e.marginAuto?"margin: auto;":"",m=e=>e.stretch?"width: 100%;":u("width")(e),p=n["f"]`
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.54);
`;a.c=p;const f=Object(r["a"])(Object(d["a"])(["gap","stretch","marginAuto","reversed","bottomBorder","topBorder"])(o["a"]))`
    box-sizing: border-box;
    display:flex;
    flex-direction: column;
    border-bottom: ${e=>e.bottomBorder?`1px solid ${l.m.LIGHT_BORDER_GRAY}`:"none"};
    ${m}
    ${u("height")}
    ${c}
    > div:not(:first-child){
     ${u("gap","margin-top")};
    }
    > button:not(:first-child){
     ${u("gap","margin-top")};
    }
`;a.b=f;const h=Object(r["a"])(Object(d["a"])(["gap","stretch","marginAuto","reversed","bottomBorder","topBorder"])(o["a"]))`
    box-sizing: border-box;
    display:flex;
    flex-direction: ${e=>e.reversed?"row-reverse":"row"};
    border-top: ${e=>e.topBorder?`1px solid ${l.m.LIGHT_BORDER_GRAY}`:"none"};
    border-bottom: ${e=>e.bottomBorder?`1px solid ${l.m.LIGHT_BORDER_GRAY}`:"none"};
    ${m}
    ${u("height")}
    ${c}
    > div:not(:first-child){
        ${u("gap","margin-left")}
    }
    > button:not(:first-child){
        ${u("gap","margin-left")}
    }
`;a.a=h},"./src/layout/CenteredCaption.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/styled-components/dist/styled-components.es.js")),r=t("./src/layout/Span.tsx");const s=o["a"].div`
    margin: auto;
    width: 100%
    height: 100%;
    min-height: 100px;
    text-align: center;
`;a.a=(e=>a=>n.createElement(s,Object.assign({},a),n.createElement("br",null),n.createElement(r.a.Caption2,{style:{margin:"auto"}},e)))},"./src/layout/Div.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js");t.n(n);a.a=(e=>n.createElement("div",Object.assign({},e)))},"./src/layout/FlexSpaceBetween.ts":function(e,a,t){"use strict";var n=t("./node_modules/styled-components/dist/styled-components.es.js");a.a=n["a"].div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`},"./src/layout/FormSection.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/styled-components/dist/styled-components.es.js")),r=t("./src/layout/Box.tsx"),s=t("./src/layout/Div.tsx"),i=t("./node_modules/ramda/index.js"),l=(t.n(i),t("./src/styles/index.ts"));const d=l["f"]`
    background-color: ${l.e.EXTRA_SOFT_BLUE};
    display: flex;
    height: 32px;
    color: ${l.e.SOFT_BLACK};
    font-size: 13px;
    font-weight: 500;
    line-height: 1.15;
    padding-left: 24px;
    align-items: center;

    .headerIcon,
    .headerIcon_done {
        width: 20px;
        height: 20px;
        margin-right: 8px;
        opacity: 0.45;
    }

    .headerIcon_done {
        color: ${l.e.DEEP_BLUE};
    }
`(l.b.FontFamily(s.a)),u=Object(o["a"])(r["b"])`
    padding: 24px;
`,c=e=>n.createElement(r.b,Object.assign({},Object(i.omit)(["done","label","content","icon","gap"])(e)),n.createElement(d,null,e.icon&&n.createElement(e.icon,{className:e.done?"headerIcon_done":"headerIcon"}),e.label),e.fill?e.children:n.createElement(u,{gap:e.gap},e.children));a.a=c,a.b=c},"./src/layout/H1.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js");t.n(n);a.a=(e=>n.createElement("h1",Object.assign({},e)))},"./src/layout/MenuItem.tsx":function(e,a,t){"use strict";var n=t("./node_modules/material-ui/Menu/index.js"),o=(t.n(n),t("./node_modules/material-ui/styles/index.js"));t.n(o);a.a=Object(o.withStyles)({root:{paddingLeft:24,paddingRight:64}})(n.MenuItem)},"./src/layout/Modal.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/material-ui/Dialog/index.js")),r=t.n(o),s=t("./src/controls/Button.tsx"),i=t("./src/smart/renderChildren.ts");a.a=class extends n.Component{constructor(e){super(e),this.open=(()=>this.setState({isOpen:!0})),this.close=(()=>this.setState({isOpen:!1})),this.onAbort=(()=>{this.props.onCancel(),this.close()}),this.onSubmit=(()=>{this.props.onSubmit(),this.close()}),this.renderBody=(()=>{const{bodyContent:e}=this.props;return"string"==typeof this.props.bodyContent?n.createElement(o.DialogContentText,null,e):Object(i.a)(e)}),this.state={isOpen:this.props.isOpen}}componentWillReceiveProps(e){e.isOpen!==this.props.isOpen&&(e.isOpen?this.open():this.close())}render(){const{children:e,title:a,onCancel:t,onSubmit:l,cancelText:d,submitText:u}=this.props;return n.createElement("span",null,e&&n.Children.map(e,e=>"string"!=typeof e&&"number"!=typeof e&&n.cloneElement(e,{onClick:this.open})),n.createElement(r.a,{fullWidth:!0,open:this.state.isOpen,onRequestClose:this.onAbort},n.createElement(o.DialogTitle,null,Object(i.a)(a)),n.createElement(o.DialogContent,null,this.renderBody()),n.createElement(o.DialogActions,null,n.createElement(s.a,{color:"primary",onClick:this.onAbort},d),n.createElement(s.a,{color:"primary",onClick:this.onSubmit},u))))}}},"./src/layout/ModalListDialog.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/layout/index.ts")),r=t("./node_modules/ramda/index.js"),s=(t.n(r),t("./src/controls/index.ts"),t("./src/styles/index.ts")),i=t("./src/controls/CustomScrollbar.tsx");Object(r.omit)(["label","subLabel","list","onCancel","onConfirm","cancelText","confirmText"]);const l=s["f"]`
    width: 50%;
    max-width: 640px;
    border-radius: 2px;
    background-color: ${s.e.WHITE};
    box-shadow: 0 16px 24px 2px rgba(0,0,0,0.14),
                0 6px 30px 5px rgba(0,0,0,0.12),
                0 8px 10px 0 rgba(0,0,0,0.2);
    padding: 24px 24px 8px;
    display: flex;
    flex-direction: column;
`(o.a);a.b=l;const d=s["f"]`
    color: ${s.e.DEFAULT_BLACK};
    font-family: Roboto;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    margin-bottom: 14px;
`(o.a);a.d=d;s["f"]`
    color: ${s.e.SOFT_BLACK};
    font-family: Roboto;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 40px;
`(o.a),s["f"]`
    max-height: 240px;
    margin-bottom: 8px;
    padding-bottom: 24px;
    display:flex;
    flex-wrap: wrap;
    color: ${s.e.DEFAULT_BLACK};
    font-family: Roboto;
    font-size: 15px;
    line-height: 12px;
`(i.a),s["f"]`
    height: 32px;
    flex: 1 0 45%;
    box-sizing: border-box;
    min-width: 296px;
    padding-right: 24px;

    @media (max-width: 800px) {
        flex: 1 0 100%;
    }
`(o.a);const u=s["f"]`
    position: relative;
    right: -16px;
    display: flex;
    flex-direction: row-reverse;
    color: ${s.e.PRIMARY};
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    line-height: 10px;
`(o.a);a.a=u;const c=s["f"]`
    width:8px;
`(o.a);a.c=c;s["f"]`
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
`(Object(o.l)(o.a))},"./src/layout/PageDiv.ts":function(e,a,t){"use strict";var n=t("./node_modules/styled-components/dist/styled-components.es.js");a.a=54,a.b=n["a"].div`

`},"./src/layout/PageLayout.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/layout/Box.tsx")),r=t("./src/controls/IconButton.tsx"),s=t("./src/styles/SVGLibrary.tsx"),i=t("./src/smart/Pure.ts"),l=t("./node_modules/react-router-redux/es/index.js"),d=t("./src/layout/PageDiv.ts"),u=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)a.indexOf(n[o])<0&&(t[n[o]]=e[n[o]])}return t};a.a=Object(i.a)().addProps({hasBackButton:!1,marginAuto:!0,topOffset:13,gap:16,style:{maxWidth:1232,width:"100%"}}).connect(e=>({history:e.history,routing:e.routing})).ap(e=>{var{hasBackButton:a,history:t,routing:i,topOffset:c,style:m}=e,p=u(e,["hasBackButton","history","routing","topOffset","style"]);return n.createElement(d.b,null,a||t&&t.appHistory&&t.appHistory.length>1&&i&&i.location&&i.location.pathname.match(/\d/)&&n.createElement(r.a,{style:{position:"fixed"},onClick:()=>p.dispatch(Object(l.b)())},n.createElement(s.a.Back,null)),n.createElement(o.b,Object.assign({},p,{style:Object.assign({paddingTop:c,paddingBottom:24,zIndex:10},m)})))})},"./src/layout/Paper.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/material-ui/Paper/index.js")),r=t.n(o);a.a=(e=>n.createElement(r.a,Object.assign({},e)))},"./src/layout/ServicePage.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js");t.n(n),t("./src/layout/Paper.tsx"),t("./src/styles/Typography.tsx")},"./src/layout/ServicePageLayout.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/layout/Div.tsx")),r=t("./src/styles/index.ts"),s=t("./src/styles/SVGLibrary.tsx"),i=t("./node_modules/react-redux/es/index.js"),l=t("./src/styles/colors.ts");const d=r["f"]`
    max-width: 480px;
`(o.a),u=r["f"]`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    flex: 0 0 24px;
    background-color: ${l.m.GREY_BLUE};
    padding-right: 68px;
    font-family: Roboto;
    font-size: 12px;
    color: ${l.m.WHITE};
    &:after {
        position: absolute;
        top: 10px;
        right: 56px;
        height: 4px;
        width: 4px;
        border-radius: 50%;
        background-color: ${e=>e.connected?l.m.BRIGHT_GREEN:l.m.DARK_RED};
        content:'';
    }
`(o.a),c=r["f"]`
    display: flex;
    align-items: center;
    padding: 0 56px 0 56px;
    justify-content: space-between;
    flex: 0 0 82px;
    background-color: ${l.m.WHITE};
    font-family: Roboto;
    font-size: 13px;
    line-height: 1.46;
    color: ${l.m.SOFT_BLACK};
`(o.a),m=r["f"]`
    display: flex;
    flex-direction: row;
    align-items: center;
`(o.a),p=r["f"]`
    display: inline-flex;
    flex-direction: column;
    padding-top: 32px;
    padding-bottom: 32px;
    flex: 1 1 auto;
    align-items: flex-start;
`(o.a),f=r["f"]`
    font-family: Roboto;
    font-size: 24px;
    text-align: left;
    color: ${l.m.DEFAULT_BLACK};
`(o.a),h=r["f"]`
    margin-top: 8px;
    font-family: Roboto;
    font-size: 18px;
    color: ${l.m.SOFT_BLACK};
`(o.a),_=r["f"]`
    display: flex;
    flex: 0 0 32px;
    background-color: ${l.m.HEAVY_LIGHT_GRAY};
    align-items: center;
    justify-content: center;
    font-family: Roboto;
    font-size: 13px;
    color: ${l.m.EXTRA_SOFT_BLACK};
`(o.a),b=r["f"]`
    margin-top: 24px;
`(o.a),v=r["f"]`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`(o.a),y=r["f"]`
    color: ${l.m.LOGO_BLUE};
    height: 35px;
    width: auto;
    marginRight: 30px;
`(s.b.Logo),g=r["f"]`
    display: inline-block;
    margin: 0 auto auto auto;
    max-width: min-content;
`(o.a);a.a=Object(i.b)(e=>({connected:e.connection.isConnected}))(e=>n.createElement(v,null,n.createElement(u,{connected:e.connected},`Соединение ${e.connected?"":"прервано"}`),n.createElement(c,null,n.createElement(m,null,n.createElement(y,null),n.createElement(d,null,"Информационная система по формированию производственной отчётности при строительстве скважин")),n.createElement("div",null,n.createElement("img",{style:{width:"107px",height:"55px"},src:"/logo-gazprom-neft.png"}))),n.createElement(g,null,n.createElement(p,null,n.createElement(f,null,e.title),n.createElement(h,null,e.label),n.createElement(b,null,e.children))),n.createElement(_,null,"ООО «Тетрасофт» © 2017")))},"./src/layout/Span.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/styles/font.ts"));const r=e=>n.createElement("span",Object.assign({},e)),s={HeadLine:o.headLine()(r),Title:o.title()(r),Subheading:o.subheading()(r),Body2:o.body2()(r),Body1:o.body1()(r),Caption:o.caption()(r),Caption2:o.caption2()(r)};a.a=s,a.b=r},"./src/layout/TabbedPage.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/controls/TabsRouted.tsx")),r=t("./src/smart/RoutedPage.ts"),s=t("./src/layout/index.ts"),i=t("./node_modules/styled-components/dist/styled-components.es.js");const l=i["a"].div`
    padding-top: 72px;
    padding-left: 16px;
    padding-right: 16px;
`;a.a=(e=>(class extends r.a{render(){const a=e(),t=a.find(e=>e.path===this.props.location.pathname),r=this.renderChildRoutes();return t?n.createElement(s.e,null,n.createElement(o.a,{tabs:a}),n.createElement(l,null,r)):r}}))},"./src/layout/Table.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js");t.n(n);a.a=(e=>n.createElement("td",Object.assign({},e)));a.b=(e=>n.createElement("th",Object.assign({},e)))},"./src/layout/index.ts":function(e,a,t){"use strict";var n=t("./src/layout/Box.tsx");t.d(a,"k",function(){return n.b}),t.d(a,"d",function(){return n.a}),t.d(a,"l",function(){return n.c});var o=t("./src/layout/Div.tsx");t.d(a,"a",function(){return o.a});var r=t("./src/layout/Span.tsx");t.d(a,"h",function(){return r.b}),t.d(a,"i",function(){return r.a});var s=t("./src/layout/Paper.tsx");t.d(a,"g",function(){return s.a});var i=t("./src/layout/PageLayout.tsx");t.d(a,"f",function(){return i.a});var l=t("./src/layout/FormSection.tsx");t.d(a,"c",function(){return l.b});t("./src/layout/ServicePage.tsx");var d=t("./src/layout/PageDiv.ts");t.d(a,"e",function(){return d.b});var u=t("./src/layout/FlexSpaceBetween.ts");t.d(a,"b",function(){return u.a});var c=t("./src/layout/TabbedPage.tsx");t.d(a,"j",function(){return c.a});t("./src/layout/CenteredCaption.tsx"),t("./src/layout/Modal.tsx")},"./src/misc/ConfirmDialog.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/react-redux/es/index.js")),r=t("./src/store/ui.ts"),s=t("./src/layout/Modal.tsx"),i=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)a.indexOf(n[o])<0&&(t[n[o]]=e[n[o]])}return t};a.a=Object(o.b)(e=>e.ui.confirmDialog)(e=>{var{action:a,text:t,dispatch:o}=e,l=i(e,["action","text","dispatch"]);return a?n.createElement(s.a,Object.assign({},l,{isOpen:!0,bodyContent:t,onCancel:()=>o(r.a.confirmCancel()),onSubmit:()=>o(r.a.confirmSubmit())})):null})},"./src/misc/Snackbar.tsx":function(e,a,t){"use strict";var n=t("./src/store/getFrontendStore.ts"),o=t("./node_modules/react/index.js"),r=(t.n(o),t("./node_modules/material-ui/styles/index.js")),s=(t.n(r),t("./node_modules/material-ui/Button/index.js")),i=t.n(s),l=t("./node_modules/material-ui/Snackbar/index.js"),d=t.n(l),u=t("./node_modules/material-ui/IconButton/index.js"),c=t.n(u),m=t("./node_modules/material-ui-icons/Close.js"),p=t.n(m),f=t("./src/store/ui.ts"),h=t("./node_modules/react-redux/es/index.js");const _=()=>Object(n.a)().dispatch(f.a.reject()),b=()=>Object(n.a)().dispatch(f.a.hideMessage()),v=Object(h.b)(e=>({ui:Object(f.c)(e)}))(Object(r.withStyles)(e=>({close:{width:4*e.spacing.unit,height:4*e.spacing.unit}}))(e=>o.createElement(d.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:void 0!==e.ui.snackbar.text,SnackbarContentProps:{"aria-describedby":"message-id"},message:o.createElement("span",{id:"message-id"},e.ui.snackbar.text),action:[o.createElement(i.a,{key:"undo",color:"accent",dense:!0,onClick:_},"Отменить"),o.createElement(c.a,{key:"close","aria-label":"Close",color:"inherit",className:e.classes.close,onClick:b},o.createElement(p.a,null))]})));a.a=v},"./src/pagination/MaxRowsMenu.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/styles/restyle.ts")),r=t("./src/styles/font.ts"),s=t("./node_modules/material-ui/Menu/index.js"),i=t.n(s),l=t("./src/layout/MenuItem.tsx"),d=t("./src/styles/SVGLibrary.tsx");const u=Object(r.caption)(o["a"]`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: 0 36px 0 0;
`)("span");a.a=class extends n.Component{constructor(){super(),this.handleClickListItem=(e=>{this.setState({open:!0,anchorEl:e.currentTarget})}),this.handleMenuItemClick=(e=>{const a={selectedIndex:e,open:!1};this.setState(a,()=>{this.props.onOptionChange(this.props.options[this.state.selectedIndex])})}),this.handleRequestClose=(()=>{this.setState({open:!1})}),this.renderMenuItem=((e,a)=>n.createElement(l.a,{key:e,selected:a===this.state.selectedIndex,onClick:()=>this.handleMenuItemClick(a)},e)),this.state={anchorEl:null,open:!1,selectedIndex:0}}componentWillReceiveProps(e){if(this.props.currentOption!==e.currentOption){const a=e.options.indexOf(e.currentOption);this.setState({selectedIndex:a})}}render(){const{ArrowDown:e}=d.a;return n.createElement("span",null,n.createElement(u,{"aria-controls":"lock-menu","aria-label":"Max rows count",onClick:this.handleClickListItem},`На странице: ${this.props.onPage}`,n.createElement(e,{style:{marginLeft:8}})),n.createElement(i.a,{id:"lock-menu",anchorEl:this.state.anchorEl,open:this.state.open,onRequestClose:this.handleRequestClose},this.props.options.map(this.renderMenuItem)))}}},"./src/pagination/Pagination.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/styles/font.ts")),r=t("./src/styles/index.ts"),s=t("./src/layout/Div.tsx"),i=t("./src/pagination/MaxRowsMenu.tsx"),l=t("./src/styles/SVGLibrary.tsx"),d=t("./src/controls/IconButton.tsx");const u=Object(o.caption)(r["f"]`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    min-height: 56px;
`)(s.a),c=Object(o.caption)(r["f"]`
    display: inline-block;
    margin: 0 36px 0 0;
`)("span");a.a=class extends n.Component{constructor(){super(...arguments),this.changeOffset=(e=>{const{total:a,offset:t,onOffsetChange:n}=this.props,o=t+e;n(o>a?t:o<0?0:o)}),this.getLastRenderingRow=(()=>{const{total:e,offset:a,maxRows:t}=this.props;return this.isLastPage()?e:a+t}),this.isLastPage=(()=>this.props.offset+this.props.maxRows>=this.props.total)}render(){const{total:e,offset:a,maxRows:t,maxRowsItems:o=[10,20,50,100],onMaxRowsChange:r}=this.props;return n.createElement(u,null,n.createElement(i.a,{onPage:this.getLastRenderingRow()-a,options:o,onOptionChange:r,currentOption:t}),n.createElement(c,null,a+1,"-",this.getLastRenderingRow()," из ",e),n.createElement(d.a,{disabled:0===a,onClick:()=>this.changeOffset(-t)},n.createElement(l.a.LeftArrow,null)),n.createElement(d.a,{disabled:this.isLastPage(),onClick:()=>this.changeOffset(t)},n.createElement(l.a.RightArrow,null)))}}},"./src/refs/ContractorTypes.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("../biz/dist/index.js")),r=(t.n(o),t("./src/refs/RefTemplate/RefTemplate.tsx")),s=t("./src/refs/RefNameInput.tsx"),i=t("./src/smart/forkConnect.tsx"),l=t("./src/grids/grid/Grid.tsx"),d=t("./src/refs/refUtils.ts");const u=Object(s.a)(o.CONTRACTOR_TYPE),c=[{title:n.createElement("span",{style:{float:"left"}},"Название"),dataIndex:"name",classNames:[l.a.cellClasses.noCellPadding],render:(e,a,t)=>u(a,t.props.dispatch)},{title:"Создал",dataIndex:"creatorUserId",classNames:[l.a.cellClasses.noCellPadding],render:e=>n.createElement("div",{style:{float:"right"}},Object(d.a)(e))}],m=Object(i.a)(e=>({data:Object(o.schemeLens)(o.CONTRACTOR_TYPE).get(e),users:Object(o.schemeLens)(o.USER).get(e)}))(e=>n.createElement(r.a,Object.assign({},e,{refScheme:o.CONTRACTOR_TYPE,columns:c})));a.a=m},"./src/refs/Incidents.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("../biz/dist/index.js")),r=(t.n(o),t("./src/styles/SVGLibrary.tsx")),s=t("../utils/dist/index.js"),i=(t.n(s),t("./node_modules/ramda/index.js")),l=(t.n(i),t("./src/layout/Div.tsx")),d=t("./src/grids/grid/Grid.tsx"),u=t("./node_modules/styled-components/dist/styled-components.es.js"),c=t("./src/refs/RefNameInput.tsx"),m=t("./src/refs/RefTemplate/RefHeaderTemplate.tsx"),p=t("./src/refs/RefTemplate/RefGridTemplate.tsx"),f=t("./src/smart/forkConnect.tsx"),h=t("./src/styles/restyle.ts"),_=t("./src/controls/ExpansionButton.tsx"),b=t("./node_modules/recompose/es/Recompose.js"),v=t("./node_modules/material-ui/Button/index.js"),y=t.n(v),g=t("./src/InputProvider.ts"),k=t("./src/refs/addRefItemModal.tsx"),j=t("./src/refs/refUtils.ts");const x=Object(i.omit)(["incidentTypes","incidentKinds","user","dispatch"]),w=Object(i.omit)(["count","isExpanded"]),M=u["a"].div`
    display: flex;
    align-items: center;
    cursor: pointer;
    float: right;
`,S=h["a"]`
    display: flex;
    flex-direction: column;
    align-items: center;
`(l.a),L=h["a"]`
    margin-top: 136px;
`(l.a),z=(h["a"]`
    margin-top: 24px;
    margin-bottom: 24px;
`(l.a),h["a"]`
    background-color: rgba(245,245,246,0.56);
    display: flex;
    flex-direction: row-reverse;
    padding-right: 8px;
    padding-left: 8px;
    border-top: 1px solid rgba(0,0,0,0.12);
    height: 56px;
    justify-content: space-between;
    align-items: center;
`(l.a)),T=h["a"]`
    height: 36px;
    color: #40C4FF!important;
    padding: 0 16px 0 8px!important;
    font-family: Roboto!important;
    font-size: 14px!important;
    font-weight: 500!important;
`(y.a),E=h["a"]`
    color: rgba(0,0,0,0.54)!important;
    font-family: Roboto;
    font-size: 14px;
    display: flex;
    height: 36px;
    padding: 0 0 0 16px!important;
    align-items: center;
`(y.a),D=h["a"]`
    color: rgba(0,0,0,0.54)!important;
    margin-left: 8px;
    margin-right: 8px;
`(r.a.DropdownUp),P=e=>n.createElement(M,Object.assign({},w(e)),e.count,n.createElement(_.a,{value:e.isExpanded,onChange:e.onClick})),O=Object(c.a)(o.INCIDENT_TYPE),A=Object(c.a)(o.INCIDENT_KIND),C=h["a"]`
    position: relative;
    left: -5px;
    height: 24px;
    width: 115%;
    background-color: #f5f5f6;
`(l.a),N=h["a"]`
    background-color: #FFFFFF; 
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);  
`(p.b);class R extends n.Component{constructor(e){super(e),this.renderHeader=(()=>n.createElement(m.a,{edit:this.state.edit,actual:this.state.actual,scrolled:!1,label:o.INCIDENT_TYPE.lang.name,onShowActive:this.showActive,onShowAll:this.showAll,onSearch:this.onSearch,onShowLogClick:this.props.onShowLog,onExportClick:this.props.onExport,onAddClick:this.onAddClick,onEditClick:this.onEditClick,onSaveClick:this.onSaveClick,onCancelClick:this.onCancelClick,scheme:o.INCIDENT_TYPE,activeAvailable:this.anyActualRefTypeExists(),width:832,saveAvailable:this.props.localHistory.length>0,allAvailable:this.allAvailable()})),this.renderBody=(()=>n.createElement(N,{data:this.getIncidentsTypesData(),users:this.props.user,refScheme:o.INCIDENT_TYPE,columns:this.getIncidentsTypesColumns(),dispatch:this.props.dispatch,edit:this.state.edit,width:832,onToggleVisible:this.handleKindsVisibilityOnTypeChange,expandedRowRender:this.renderExpandedRow,gridRowsClassname:(e,a)=>[-1!==this.state.expanded.indexOf(e.incidentTypeId)?d.a.rowClasses.expandedRaw:""],onExpandChange:this.handleExpanded,expandAll:this.state.filter.length>0,expandedValues:this.state.expanded})),this.renderTableBar=(e=>n.createElement(z,null,n.createElement(E,{id:"c"+e.incidentTypeId,onClick:this.collapse},"Свернуть",n.createElement(D,null)),this.state.edit&&n.createElement(T,{id:"a"+e.incidentTypeId,onClick:this.onAddKindClick},n.createElement(r.a.Add,{style:{marginRight:"9px"}}),`Добавить ${o.INCIDENT_KIND.lang.singular}`))),this.renderExpandedRow=((e,a)=>n.createElement("tr",null,n.createElement("td",{colSpan:99},n.createElement(C,null),n.createElement(p.b,{data:this.getIncidentKindsData(e),users:this.props.user,refScheme:o.INCIDENT_KIND,columns:this.getIncidentKindsColumns(),dispatch:this.props.dispatch,edit:this.state.edit,nested:!0,onToggleVisible:this.handleTypeVisibilityOnKindChange,gridRowsClassname:(e,a)=>[d.a.rowClasses.expandedRaw,d.a.cellClasses.noCellPadding],headRowsClassname:()=>[d.a.rowClasses.expandedRaw,d.a.cellClasses.noCellPadding],tableBar:this.renderTableBar(e),emptyLabel:this.getEmptyLabel()}),n.createElement(C,null)))),this.getIncidentsTypesColumns=(()=>[{title:n.createElement("span",{style:{float:"left"}},"Название"),dataIndex:"incidentTypeId",classNames:[d.a.cellClasses.noCellPadding],render:(e,a,t)=>O(a,t.props.dispatch)},{title:n.createElement("span",{style:{marginRight:"17px"}},"Подвид"),dataIndex:o.INCIDENT_TYPE.uniqueProperty,classNames:[d.a.cellClasses.noCellPadding],render:(e,a,t)=>{const o=!this.state.edit&&this.state.actual?e=>!e.removed:i.T,r=Object(s.toIndexedArray)(this.props.incidentKinds).filter(a=>a.incidentTypeId===e).filter(o).length;return n.createElement(P,{count:r.toString(),isExpanded:t.state.expandedKeys.includes(e),id:e,onClick:()=>{t.toggleRowExpand(a)}})}},{title:"Создал",classNames:[d.a.cellClasses.noCellPadding],dataIndex:"creatorUserId",render:e=>n.createElement("div",{style:{float:"right"}},Object(j.a)(e))}]),this.getEmptyLabel=(()=>""),this.getIncidentKindsColumns=(()=>[{title:n.createElement("span",{style:{float:"left"}},"Название"),dataIndex:"incidentKindId",classNames:[d.a.cellClasses.noCellPadding],render:(e,a,t)=>A(a,t.props.dispatch)},{title:"Создал",dataIndex:"creatorUserId",classNames:[d.a.cellClasses.noCellPadding],render:e=>n.createElement("div",{style:{float:"right"}},Object(j.a)(e))}]),this.allAvailable=(()=>Object(s.toIndexedArray)(this.props.incidentKinds).filter(e=>e.removed).length>0||Object(s.toIndexedArray)(this.props.incidentTypes).filter(e=>e.removed).length>0),this.handleExpanded=(e=>this.setState({expanded:e})),this.handleKindsVisibilityOnTypeChange=(e=>{const a=!this.findTypeById(e).removed;this.getKindIdsOfType(e).forEach(e=>this.props.dispatch(o.actions.update(o.INCIDENT_KIND,e,{removed:a})))}),this.handleTypeVisibilityOnKindChange=(e=>{const a=this.findKindById(e),t=this.findTypeById(a.incidentTypeId),n=!a.removed;a.removed&&t.removed&&this.props.dispatch(o.actions.update(o.INCIDENT_TYPE,t.incidentTypeId,{removed:n}))}),this.findKindById=(e=>Object(s.toIndexedArray)(this.props.incidentKinds).filter(a=>a.incidentKindId===e)[0]),this.findTypeById=(e=>Object(s.toIndexedArray)(this.props.incidentTypes).filter(a=>a.incidentTypeId===e)[0]),this.getIncidentsTypesData=(()=>{const e=!this.state.edit&&this.state.actual?e=>!e.removed:i.T;return Object(s.toIndexedArray)(this.props.incidentTypes).filter(e).filter(e=>!this.state.filter||e.name.toLowerCase().includes(this.state.filter.toLowerCase())||this.isIncidentKindInFilter(e.incidentTypeId))}),this.isIncidentKindInFilter=(e=>Object(s.toIndexedArray)(this.props.incidentKinds).filter(a=>a.incidentTypeId===e).filter(e=>!this.state.filter||e.name.toLowerCase().includes(this.state.filter.toLowerCase())).length>0),this.collapse=(e=>{const a=e.currentTarget.id.substring(1);this.setState({expanded:this.state.expanded.filter(e=>e!==a)})}),this.getIncidentKindsData=(e=>{const a=!this.state.edit&&this.state.actual?e=>!e.removed:i.T;return Object(s.toIndexedArray)(this.props.incidentKinds).filter(a=>a.incidentTypeId===e.incidentTypeId).filter(a).filter(e=>!this.state.filter||e.name.toLowerCase().includes(this.state.filter.toLowerCase()))}),this.getKindIdsOfType=(e=>Object(s.toIndexedArray)(this.props.incidentKinds).filter(a=>e===a.incidentTypeId).map(e=>e.incidentKindId)),this.onAddClick=(()=>this.setState({showModal:!0,addingScheme:o.INCIDENT_TYPE})),this.onAddKindClick=(e=>this.setState({showModal:!0,addingScheme:o.INCIDENT_KIND,addingKindTypeId:e.currentTarget.id.substring(1)})),this.hidePopup=(()=>this.setState({showModal:!1})),this.anyRefTypeExists=(()=>Object(s.toIndexedArray)(this.props.incidentTypes).length>0),this.getExpandedItemDeletedOnSave=(()=>{const{expanded:e}=this.state;return e&&e.map(e=>this.findTypeById(e)).filter(e=>this.state.actual&&e.removed)}),this.anyActualRefTypeExists=(()=>Object(s.toIndexedArray)(this.props.incidentTypes).filter(e=>!e.removed).length>0),this.showActive=(()=>this.setState({actual:!0,expanded:""})),this.showAll=(()=>this.setState({actual:!1,expanded:""})),this.onEditClick=(()=>{this.props.fork(),this.setState({edit:!0})}),this.onSearch=(e=>{"string"==typeof e&&this.setState({filter:e})}),this.onCancelClick=(()=>{this.props.reset(),this.setState({edit:!1})}),this.onSaveClick=(()=>{const e=this.getExpandedItemDeletedOnSave();this.props.commit(),this.setState({edit:!1,actual:this.state.actual&&this.anyActualRefTypeExists()||!this.allAvailable(),expanded:e})}),this.state={actual:this.anyActualRefTypeExists(),expanded:[],edit:!this.anyRefTypeExists(),filter:"",showModal:!1,addingScheme:o.INCIDENT_TYPE,addingKindTypeId:null}}render(){return n.createElement(S,Object.assign({},x(this.props)),this.renderHeader(),n.createElement(g.a,{readonly:!this.state.edit},n.createElement(L,null,this.renderBody(),this.state.showModal&&n.createElement(k.a,{dispatch:this.props.dispatch,frontState:this.props.frontState,label:`Добавить ${this.state.addingScheme.lang.singular}`,onAdd:this.hidePopup,onCancel:this.hidePopup,scheme:this.state.addingScheme,itemParentKey:this.state.addingScheme===o.INCIDENT_KIND&&"incidentTypeId",itemParentId:this.state.addingKindTypeId}))))}}R.defaultProps={history:[]};const B=Object(f.a)(e=>({incidentTypes:Object(o.schemeLens)(o.INCIDENT_TYPE).get(e)||{},incidentKinds:Object(o.schemeLens)(o.INCIDENT_KIND).get(e)||{},users:Object(o.schemeLens)(o.USER).get(e)||{}}))(R);a.a=Object(b.b)({forkDisabled:!1})(B)},"./src/refs/RefNameInput.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/smart/Form.ts")),r=t("./src/inputs/LiteTextInput.tsx"),s=t("./src/smart/form/bindInput.ts"),i=t("../biz/dist/index.js"),l=(t.n(i),t("./node_modules/moize/es/index.js"));a.a=function(e){const a=Object(o.a)(e,["name"]).ap(e=>n.createElement(r.a,Object.assign({},Object(s.b)("name")(e))));return Object(l.a)((t,o)=>n.createElement(a,{model:t,onValid:a=>o(i.actions.update(e,a))}),{maxSize:1e3,maxArgs:2})}},"./src/refs/RefTemplate/RefGridTemplate.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/grids/grid/Grid.tsx")),r=t("./src/styles/SVGLibrary.tsx"),s=t("./src/layout/Paper.tsx"),i=t("./node_modules/ramda/index.js"),l=(t.n(i),t("../biz/dist/index.js")),d=(t.n(l),t("./src/styles/index.ts")),u=t("./src/layout/Div.tsx"),c=t("../utils/dist/index.js"),m=(t.n(c),t("./src/InputProvider.ts"));const p=Object(i.omit)(["data","users","refScheme","columns","dispatch","headerExtraText","tableBar","topBar","isSelectionDisabled","selectionDisableReason","withoutHeader","emptyLabel"]),f=e=>d["f"]`
    color: rgba(0,0,0,0.54);
    cursor: pointer;
`(e),h=e=>d["f"]`
    color: #BDBDBD;
`(e),_=d["f"]`
    display: flex;
    ${e=>e.nested?"background-color:  rgba(245,245,246,0.56)":""};
    flex-direction: column;
    color: rgba(0,0,0,0.54);
    font-family: Roboto;
    font-size: 16px;
    padding: 90px 0 82px;
    line-height: 24px;
    align-items: center;
    justify-content: center;
`(u.a);a.a=(e=>e.charAt(0).toUpperCase()+e.slice(1));const b=d["f"]`
    color: rgba(0,0,0,0.21);
    font-family: Roboto;
    font-size: 24px;
`(u.a),v=d["f"]`
    width: ${e=>!e.nested&&e.width?e.width+"px":"auto"};
`(u.a);a.b=class extends n.Component{constructor(e){super(e),this.getVisibleIcon=(e=>this.props.edit?f(e):h(e)),this.renderToggleVisibleColumn=(()=>[{title:"",classNames:[o.a.cellClasses.minWidth,o.a.cellClasses.noCellPadding],dataIndex:this.props.refScheme.uniqueProperty,render:(e,a)=>{const t=this.getVisibleIcon(a.removed?r.a.Invisible:r.a.Visible);return n.createElement(y,{title:this.props.edit?"":"Изменить в режим редактирования",onClick:this.onToggleVisibleClick,id:a[this.props.refScheme.uniqueProperty],removed:a.removed,style:{width:"24px"}},n.createElement(t,null))}}]),this.renderEmpty=(()=>n.createElement(s.a,null,n.createElement(_,{nested:this.props.nested},n.createElement(b,null,this.props.emptyLabel?this.props.emptyLabel:`Нет созданных ${this.props.refScheme.lang.plural}`)),this.props.tableBar)),this.renderData=(()=>{const{columns:e,values:a,refScheme:t}=this.props;return n.createElement("div",null,n.createElement(m.a,{readonly:!this.props.edit,disabled:!this.props.edit},n.createElement(o.a,{data:this.getGridData(),dispatch:this.props.dispatch,columns:Object(i.concat)(this.renderToggleVisibleColumn(),e),idKey:t.uniqueProperty,mode:"",withPagination:!1,value:a,rowClassName:this.getRowClassName,headRowClassName:this.getHeadRowClassName,withoutHeader:this.props.withoutHeader,expandedRowRender:this.props.expandedRowRender,expandable:!0,onExpandChange:this.props.onExpandChange,expandedValues:this.props.expandedValues,expandAll:this.props.expandAll})),this.props.tableBar)}),this.getGridData=(()=>{const e=this.props.actual&&!this.props.edit?e=>!e.removed:i.T;return this.getDataAsIndexedArray().filter(e)}),this.isRenderable=(()=>(this.props.edit||!this.props.actual||this.getDataAsIndexedArray().filter(e=>!e.removed).length>0)&&this.getDataAsIndexedArray().length>0),this.getDataAsIndexedArray=(()=>Object.keys(this.props.data).map(e=>this.props.data[e])),this.onAddClick=(()=>console.log("add clicked")),this.onToggleVisibleClick=(e=>{if(this.props.edit){const{refScheme:a,onToggleVisible:t}=this.props,n=e.currentTarget.id,o=this.findRefElementById(n);t&&t(n);const r=!o.removed;this.props.dispatch(l.actions.update(a,n,{removed:r}))}}),this.findRefElementById=(e=>Object(c.toIndexedArray)(this.props.data).filter(a=>a[this.props.refScheme.uniqueProperty]===e)[0]),this.getRowClassName=((e,a)=>{const t=this.props.gridRowsClassname?this.props.gridRowsClassname(e,a):[];return[e.removed?o.a.rowClasses.grayBgColor:"",this.props.edit?"":o.a.rowClasses.readonly,o.a.rowClasses.refRaw].concat(t)}),this.getHeadRowClassName=(()=>{const e=this.props.headRowsClassname?this.props.headRowsClassname():[];return[o.a.rowClasses.refRawHeader].concat(e)}),this.state={selected:[]}}render(){return n.createElement(v,Object.assign({},p(this.props)),this.isRenderable()?this.renderData():this.renderEmpty())}};const y=d["f"]`
    background-color: ${e=>e.removed?"#ECECEC":"#FFFFFF"}

    &[title]:hover:after {
        content: attr(title);
        background-color: rgba(97,97,97,0.9);
        color: #FFFFFF;
        font-family: Roboto;
        font-size: 10px;
        font-weight: 500;
    }
`(u.a)},"./src/refs/RefTemplate/RefHeaderTemplate.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/styles/restyle.ts")),r=t("./src/layout/Paper.tsx"),s=t("./node_modules/ramda/index.js"),i=(t.n(s),t("./src/refs/RefTemplate/RefTopBar.tsx")),l=t("./src/refs/RefTemplate/RefSubBar.tsx");const d=Object(s.omit)(["edit","actual","scrolled","label","saveAvailable","onShowActive","onShowAll","activeAvailable","onSearchClick","onShowLogClick","onExportClick","onAddClick","onEditClick","onSaveClick","onCancelClick","scheme","allAvailable"]),u=o["a"]`
    width: 100%;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 26px;
    position: fixed;
    z-index: 10;
`(r.a);a.a=(e=>n.createElement(u,Object.assign({},d(e),{elevation:e.scrolled?4:2}),n.createElement(i.a,{onDownloadClick:e.onExportClick,onShowLogClick:e.onShowLogClick,actual:e.actual,edit:e.edit,label:e.label,width:e.width,onSearch:e.onSearch}),n.createElement(l.a,{active:e.actual,edit:e.edit,onShowActive:e.onShowActive,onShowAll:e.onShowAll,onSave:e.onSaveClick,onEditClick:e.onEditClick,width:e.width,onCancel:e.onCancelClick,onAddClick:e.onAddClick,saveAvailable:e.saveAvailable,activeAvailable:e.activeAvailable,allAvailable:e.allAvailable,scheme:e.scheme})))},"./src/refs/RefTemplate/RefSubBar.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/styles/index.ts")),r=t("./node_modules/material-ui/Button/index.js"),s=t.n(r),i=t("./node_modules/styled-components/dist/styled-components.es.js"),l=t("./src/styles/SVGLibrary.tsx"),d=t("./src/layout/Div.tsx"),u=t("./node_modules/ramda/index.js"),c=(t.n(u),t("./src/styles/colors.ts"));const m=Object(u.omit)(["active","edit","scheme","onShowActive","onShowAll","onAddClick","onSave","onEditClick","onCancel","saveAvailable","activeAvailable"]),p=o["f"]`
    background-color: ${e=>e.disabled?c.m.BORDER_GRAY:c.m.PRIMARY}!important;
    color: ${c.m.WHITE}!important;

    &:hover {
        background-color: ${c.m.ACCENT_BLUE}!important;
        box-shadow: 0 0 2px 0 rgba(37,37,37,0.12), 0 2px 2px 0 rgba(37,37,37,0.24);
    }
`(s.a),f=o["f"]`
color: ${c.m.SOFT_BLACK}!important;`(s.a),h=i["a"].div`
    display: flex;
    justify-content: space-between;
    padding: 12px 0 12px 0;
    align-items: center;
    height: 32px;
    width: ${e=>e.width?e.width:"auto"}px;
`,_=i["a"].button`
    color: ${e=>e.active?c.m.DEEP_BLUE:c.m.SOFT_BLACK};
    background: none;
    font-family: Roboto;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 20px;
    margin-left: 8px;
    outline: none;
    text-align: center;
    border: ${e=>e.active?`1px solid ${c.m.DEEP_BLUE}`:`1px solid ${c.m.TRANSPARENT}`};
    border-radius: 2px;
    cursor: pointer;

    &:disabled {
        cursor: default;
        color: ${c.m.EXTRA_SOFT_BLACK};
    }
`,b=o["f"]`
    display: flex;
    width: 214px;
    align-items: center;
    color: ${c.m.SOFT_BLACK};
    font-family: Roboto;
    font-size: 12px;
    `(d.a),v=Object(i["a"])(s.a)`
    height: 36px;
    color: ${c.m.PRIMARY}!important;
    padding: 0 16px 0 8px!important;
    font-family: Roboto!important;
    font-size: 14px!important;
    font-weight: 500!important;
`,y=Object(i["a"])(s.a)`
    height: 36px;
    margin-right: -11px;
    color: ${c.m.PRIMARY}!important;
    padding: 0 8px 0 16px!important;
    font-family: Roboto!important;
    font-size: 14px!important;
    font-weight: 500!important;
`;a.a=(e=>n.createElement(h,Object.assign({},m(e)),e.edit?n.createElement(v,{style:{marginLeft:"-12px"},onClick:e.onAddClick},n.createElement(l.b.Add,{style:{marginRight:"9px"}}),`Добавить ${e.scheme.lang.singular}`):n.createElement(b,null,"Показать:",n.createElement(_,{active:e.active,disabled:!e.activeAvailable,title:e.activeAvailable?"":"Нет активных "+e.scheme.lang.plural,onClick:e.onShowActive},"Активные"),n.createElement(_,{active:!e.active,onClick:e.onShowAll,disabled:!e.allAvailable,title:!e.allAvailable&&"Нет удаленных "+e.scheme.lang.plural},"Все")),e.edit?n.createElement("div",null,n.createElement(f,{onClick:e.onCancel,style:{marginRight:"8px"}},"Отмена"),n.createElement(p,{disabled:!e.saveAvailable,onClick:e.onSave},"Сохранить")):n.createElement(y,{onClick:e.onEditClick},"Редактировать",n.createElement(l.b.Edit,{style:{marginLeft:"8px"}}))))},"./src/refs/RefTemplate/RefTemplate.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/refs/RefTemplate/RefHeaderTemplate.tsx")),r=t("./src/refs/RefTemplate/RefGridTemplate.tsx"),s=t("../utils/dist/index.js"),i=(t.n(s),t("./src/styles/restyle.ts")),l=t("./node_modules/ramda/index.js"),d=(t.n(l),t("./src/layout/index.ts")),u=t("./src/refs/addRefItemModal.tsx");const c=Object(l.omit)(["fork","commit","reset","history","dispatch","refScheme","frontState"]),m=i["a"]`
    display: flex;
    flex-direction: column;
    align-items: center;
`(d.a),p=i["a"]`
    margin-top: 136px;
`(d.a);a.a=class extends n.Component{constructor(e){super(e),this.getData=(()=>Object(s.toIndexedArray)(this.props.data).filter(e=>this.state.edit||!e.removed===this.state.actual).filter(e=>!this.state.filter||e.name.toLowerCase().includes(this.state.filter.toLowerCase()))),this.showActive=(()=>this.setState({actual:!0})),this.showAll=(()=>this.setState({actual:!1})),this.onEditClick=(()=>{this.props.fork(),this.setState({edit:!0})}),this.onSearch=(e=>{"string"==typeof e&&this.setState({filter:e})}),this.onCancelClick=(()=>{this.props.reset(),this.setState({edit:!1})}),this.onSaveClick=(()=>{this.props.commit(),this.setState({edit:!1,actual:!this.state.actual||this.refsActiveDataExists()})}),this.onAddClick=(()=>this.setState({modalShown:!0})),this.hideModal=(()=>this.setState({modalShown:!1})),this.refsDataExists=(()=>Object(s.toIndexedArray)(this.props.data).length>0),this.refsActiveDataExists=(()=>Object(s.toIndexedArray)(this.props.data).filter(e=>!e.removed).length>0),this.refsDeletedExists=(()=>Object(s.toIndexedArray)(this.props.data).filter(e=>e.removed).length>0),this.state={edit:!1,actual:this.refsActiveDataExists(),scrolled:!1,filter:"",modalShown:!1}}render(){return n.createElement(m,Object.assign({},c(this.props)),n.createElement(o.a,{edit:this.state.edit,actual:this.state.actual,scrolled:this.state.scrolled,emptyRef:!this.refsDataExists(),label:Object(s.capitalize)(this.props.refScheme.lang.name),onShowActive:this.showActive,onShowAll:this.showAll,onSearch:this.onSearch,onShowLogClick:this.props.onShowLogClick,onExportClick:this.props.onExportClick,onAddClick:this.onAddClick,onEditClick:this.onEditClick,onSaveClick:this.onSaveClick,onCancelClick:this.onCancelClick,saveAvailable:this.props.localHistory.length>0,activeAvailable:this.refsActiveDataExists(),width:832,scheme:this.props.refScheme,allAvailable:this.refsDeletedExists()}),n.createElement(p,null,n.createElement(d.g,null,n.createElement(r.b,{data:this.getData(),users:this.props.users,refScheme:this.props.refScheme,columns:this.props.columns,dispatch:this.props.dispatch,actual:this.state.actual,width:832,edit:this.state.edit}))),this.state.modalShown&&n.createElement(u.a,{label:`Добавить ${this.props.refScheme.lang.singular}`,onAdd:this.hideModal,onCancel:this.hideModal,scheme:this.props.refScheme,dispatch:this.props.dispatch,frontState:this.props.frontState}))}}},"./src/refs/RefTemplate/RefTopBar.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/ramda/index.js")),r=(t.n(o),t("./node_modules/styled-components/dist/styled-components.es.js")),s=t("./src/styles/index.ts"),i=t("./src/styles/SVGLibrary.tsx"),l=t("./src/layout/Div.tsx"),d=t("./src/controls/DropdownMenu.tsx"),u=t("./node_modules/material-ui/IconButton/index.js"),c=t.n(u),m=t("./src/controls/Search.tsx"),p=t("./src/styles/colors.ts");const f=Object(o.omit)(["onDownloadClick","onShowLogClick","onSearchClick","actual","edit","label"]),h=r["a"].div`
    height: 32px;
    color: ${p.m.DEFAULT_BLACK};
    font-family: Roboto;
    font-size: 24px;
    line-height: 32px;
    display: flex;
    align-items: center;
`,_=r["a"].div`
    display: flex;
    justify-content: space-between;
    padding: 12px 0 12px 0;
    border-bottom: 1px solid ${p.m.BORDER_GRAY};
    align-items: center;
    height: 32px;
    width: ${e=>e.width?e.width:"auto"}px;
`,b=s["f"]`
    display:flex;
    justify-content: space-between;
    align-items: center;
   `(l.a),v=e=>s["f"]`
    color: ${p.m.SOFT_BLACK};
    cursor: pointer;
`(e),y=(v(i.b.Search),s["f"]`
    margin-right: 21px;
`(v(i.b.Download))),g=s["f"]`
    margin-right: 21px;
`(v(i.b.ShowLog)),k=r["a"].span`
    color: ${p.m.DEFAULT_BLACK};
    font-family: Roboto;
    font-size: 15px;
    margin-right: 40px;
`;a.a=(e=>n.createElement(_,Object.assign({},f(e)),n.createElement(h,null,e.label),n.createElement(b,null,n.createElement(m.a,{style:{top:"1px"},value:"",onChange:e.onSearch}),n.createElement(d.a,{data:[{renderIcon:()=>n.createElement(y,null),renderLabel:()=>n.createElement(k,null,"Скачать справочник"),onChange:e.onDownloadClick},{renderIcon:()=>n.createElement(g,null),renderLabel:()=>n.createElement(k,null,"История изменений"),onChange:e.onShowLogClick}]},n.createElement(c.a,{style:{marginRight:"-22px"}},n.createElement(i.b.Dots,null))))))},"./src/refs/RefsList.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/react-columns/es/index.js")),r=t("./src/layout/index.ts"),s=t("./src/refs/RefsNavigation.tsx"),i=t("./src/refs/SingleLetterRefs.tsx"),l=t("./src/styles/index.ts");const d=[{columns:2,query:"min-width: 664px"},{columns:3,query:"min-width: 1008px"},{columns:4,query:"min-width: 1332px"},{columns:5,query:"min-width: 1700px"}];const u=l["f"]`
    padding: 58px 0px 0px 0px;
    box-sizing: border-box;
`(r.a);a.a=l["f"]`
    background-color: #f3f3f3;
`(class extends n.Component{constructor(e){super(e),this.setNavHoverLetter=(e=>this.setState({hoveredLetter:e.target.innerHTML})),this.resetNavHoveredLetter=(()=>this.setState({hoveredLetter:null})),this.scrollToRef=(e=>this.scrollToComponent(this.refs["s"+e.currentTarget.id.slice(1)],{align:"top",offset:-58})),this.state={letter:null,hoveredLetter:null}}componentDidMount(){this.scrollToComponent=t("./node_modules/react-scroll-to-component/index.js")}render(){const e=this.props.data.map(e=>e.name),a=[...new Set(e.map(e=>e.slice(0,1).toUpperCase()))].sort();return n.createElement("div",Object.assign({},this.props),n.createElement(s.a,{refNames:a,onNavigationClick:this.scrollToRef,onMouseLeave:this.resetNavHoveredLetter,onHoverChange:this.setNavHoverLetter}),n.createElement(u,null,n.createElement(o.a,{queries:d,gap:12,rootStyles:{marginLeft:"12px",marginRight:"12px"}},a.map((e,a)=>n.createElement(i.a,{id:"s"+a,key:"s"+a,ref:"s"+a,letter:e,onSelect:this.props.onSelect,refs:this.props.data.filter(a=>a.name.slice(0,1).toUpperCase()===e),isHovered:e===this.state.hoveredLetter})))))}})},"./src/refs/RefsNavigation.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/ramda/index.js")),r=(t.n(o),t("./node_modules/styled-components/dist/styled-components.es.js")),s=t("./src/styles/SVGLibrary.tsx"),i=t("./src/styles/restyle.ts"),l=t("./src/layout/Div.tsx"),d=t("./src/layout/Paper.tsx");const u=i["a"]`
    width: 14px;
    margin-right: 14px;
    &:not(:last-child):after
{
        position: absolute;
        top: 27px;
        margin-left: 17px;
        height: 2px;
        width: 2px;
        border-radius: 50%;
        background-color: rgba(0,0,0,0.38);
        content:'';
}
`(l.a),c=Object(o.omit)(["refNames","onHoverChange","onNavigationClick"]),m=e=>n.createElement(d.a,Object.assign({},c(e)),n.createElement("div",{className:"lettersNav",onMouseLeave:e.onMouseLeave},e.refNames.map((a,t)=>n.createElement(u,{key:"nc"+t.toString()},n.createElement("div",{key:t,id:"l"+t.toString(),onClick:e.onNavigationClick,className:"navLetter",onMouseEnter:e.onHoverChange},a)))),n.createElement("div",null,n.createElement(s.b.Search,null)));a.a=Object(r["a"])(m)`
position: fixed;
width: 100%;
box-sizing: border-box;
display:flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 0 44px;
background-color: #FFFFFF;
height: 56px;

.lettersNav
{
    display:flex;
    flex-direction: row;
}

.navLetter
{
    color: rgba(0,0,0,0.54);
    font-family: Roboto;
    font-size: 12px;
    font-weight: 500;
    line-height: 26px;
}

.navLetter:hover
{
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
}

`},"./src/refs/RigWinchTypes.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("../biz/dist/index.js")),r=(t.n(o),t("./src/refs/RefTemplate/RefTemplate.tsx")),s=t("./src/refs/RefNameInput.tsx"),i=t("./src/smart/forkConnect.tsx"),l=t("./src/grids/grid/Grid.tsx"),d=t("./src/refs/refUtils.ts");const u=Object(s.a)(o.RIG_WINCH_TYPE),c=[{title:n.createElement("span",{style:{float:"left"}},"Название"),dataIndex:"name",classNames:[l.a.cellClasses.noCellPadding],render:(e,a,t)=>u(a,t.props.dispatch)},{title:"Создал",dataIndex:"creatorUserId",classNames:[l.a.cellClasses.noCellPadding],render:e=>n.createElement("div",{style:{float:"right"}},Object(d.a)(e))}],m=Object(i.a)(e=>({data:Object(o.schemeLens)(o.RIG_WINCH_TYPE).get(e),users:Object(o.schemeLens)(o.USER).get(e)}))(e=>n.createElement(r.a,Object.assign({},e,{refScheme:o.RIG_WINCH_TYPE,columns:c})));a.a=m},"./src/refs/SingleLetterRefs.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/ramda/index.js")),r=(t.n(o),t("./src/layout/index.ts")),s=t("./src/styles/index.ts");const i=Object(o.omit)(["letter","refs","isHovered","onRefClick"]),l=s["f"]`
    padding: 12px 24px 12px 24px;
    border-bottom: 1px solid ${s.e.BORDER_GRAY};
    color: ${s.e.EXTRA_SOFT_BLACK};
    font-family: Roboto;
    font-size: 24px;
    line-height: 28px;
`(r.a),d=s["f"]`
    display: flex;
    flex-direction: column;
`(r.a),u=s["f"]`
    display: flex;
    justify-content: space-between;
    height: 40px;
    padding: 0 24px;
    align-items: center;
    color: ${s.e.DEFAULT_BLACK};
    font-family: Roboto;
    font-size: 13px;

    &:hover {
        cursor: pointer;
        background-color: #F5F5F5;
    }
`(r.a),c=s["f"]`
    color: ${s.e.EXTRA_SOFT_BLACK};
    font-size: 12px;
`(r.a);a.a=s["f"]`
    margin: 24px 0;
    height: fit-content;
    box-sizing: border-box;
    border-radius: 2px;
    background-color: ${s.e.WHITE};

    &:hover{
        box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2),
                    0px 12px 17px 2px rgba(0, 0, 0, 0.14),
                    0px 5px 22px 4px rgba(0, 0, 0, 0.12);
    }
`(e=>n.createElement(r.g,Object.assign({elevation:e.isHovered?12:2},i(e)),n.createElement(l,null,e.letter),n.createElement(d,null,e.refs.map((e=>a=>n.createElement(u,{onClick:()=>e(a),key:a.id,id:a.id},a.name,n.createElement(c,null,a.count)))(e.onSelect)))))},"./src/refs/addRefItemModal.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/styles/restyle.ts")),r=t("./src/layout/Div.tsx"),s=t("./src/layout/ModalListDialog.tsx"),i=t("./src/inputs/TextInput.tsx"),l=t("./src/controls/Button.tsx"),d=t("../biz/dist/index.js"),u=(t.n(d),t("../utils/dist/index.js"));t.n(u);const c=o["a"]`
position: absolute;
left: 0;
top: 0;
z-index: 10000;
display: flex;
align-items: center;
justify-content: center;
box-sizing: border-box;
width: 100vw;
height: 100vh;
background-color: rgba(0,0,0,0.54);
`(r.a);a.a=class extends n.PureComponent{constructor(e){super(),this.onAdd=(()=>{const e=(Object(u.toIndexedArray)(this.props.frontState.biz[this.props.scheme.ownerKey]).length+1).toString(),a=this.props.itemParentKey?{name:this.state.itemName,[this.props.itemParentKey]:this.props.itemParentId,creatorUserId:this.props.frontState.credentials.userId}:{name:this.state.itemName,creatorUserId:this.props.frontState.credentials.userId};this.props.dispatch(d.actions.create(this.props.scheme,a,e)),this.props.onAdd()}),this.onChange=(e=>this.setState({itemName:e,error:this.validateUnique(e)})),this.validateUnique=(e=>Object(u.toIndexedArray)(this.props.frontState.biz[this.props.scheme.ownerKey]).some(a=>a.name.toLowerCase()===e.toLowerCase())),this.state={itemName:"",error:!1}}render(){return n.createElement(c,null,n.createElement(s.b,null,n.createElement(s.d,null,this.props.label),n.createElement(i.a,{onChange:this.onChange,error:this.state.error,label:this.state.error&&"Введенное значение должно быть уникальным",style:{height:"70px"}}),n.createElement(s.a,null,n.createElement(l.a,{color:"inherit",disabled:this.state.error,onClick:this.onAdd},"Добавить"),n.createElement(s.c,null),n.createElement(l.a,{color:"inherit",onClick:this.props.onCancel},"Отмена"))))}}},"./src/refs/refUtils.ts":function(e,a,t){"use strict";var n=t("./src/store/configureStore.tsx"),o=t("../biz/dist/index.js");t.n(o);a.a=(e=>{const a=Object(o.getByKey)(o.schemes.USER)(e)(Object(n.e)().getState());return a?a.lastName+" "+a.firstName.slice(0,1).toUpperCase()+"."+a.patrName.slice(0,1).toUpperCase()+".":"Неизвестно"})},"./src/refs/well_refs/WellFields.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("../biz/dist/index.js")),r=(t.n(o),t("./src/refs/RefTemplate/RefTemplate.tsx")),s=t("./src/refs/RefNameInput.tsx"),i=t("./src/smart/forkConnect.tsx"),l=t("./src/grids/grid/Grid.tsx"),d=t("./src/refs/refUtils.ts");const u=Object(s.a)(o.WELL_FIELD),c=[{title:n.createElement("span",{style:{float:"left"}},"Название"),dataIndex:"name",classNames:[l.a.cellClasses.noCellPadding],render:(e,a,t)=>u(a,t.props.dispatch)},{title:"Создал",dataIndex:"creatorUserId",classNames:[l.a.cellClasses.noCellPadding],render:e=>n.createElement("div",{style:{float:"right"}},Object(d.a)(e))}],m=Object(i.a)(e=>({data:Object(o.schemeLens)(o.WELL_FIELD).get(e),users:Object(o.schemeLens)(o.USER).get(e)}))(e=>n.createElement(r.a,Object.assign({},e,{refScheme:o.WELL_FIELD,columns:c})));a.a=m},"./src/refs/well_refs/WellLicenseAreas.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("../biz/dist/index.js")),r=(t.n(o),t("./src/refs/RefTemplate/RefTemplate.tsx")),s=t("./node_modules/moment/moment.js"),i=(t.n(s),t("./src/refs/RefNameInput.tsx")),l=t("./src/smart/forkConnect.tsx"),d=t("./src/grids/grid/Grid.tsx"),u=t("./node_modules/material-ui/TextField/index.js"),c=t.n(u),m=t("./src/refs/refUtils.ts");const p=Object(i.a)(o.WELL_LICENSE_AREA),f=[{title:n.createElement("span",{style:{float:"left"}},"Название"),dataIndex:"name",classNames:[d.a.cellClasses.noCellPadding],render:(e,a,t)=>p(a,t.props.dispatch)},{title:"Лицензия до",dataIndex:"expirationDate",classNames:[d.a.cellClasses.noCellPadding],render:(e,a,t)=>n.createElement(c.a,{disabled:a.removed,onChange:e=>t.props.dispatch(o.actions.update(o.WELL_LICENSE_AREA,a.wellLicenseAreaId,{expirationDate:e.target.value})),value:s(e).format("YYYY-MM-DD"),type:"date"})},{title:"Создал",dataIndex:"creatorUserId",classNames:[d.a.cellClasses.noCellPadding],render:e=>n.createElement("div",{style:{float:"right"}},Object(m.a)(e))}],h=Object(l.a)(e=>({data:Object(o.schemeLens)(o.WELL_LICENSE_AREA).get(e),users:Object(o.schemeLens)(o.USER).get(e)}))(e=>n.createElement(r.a,Object.assign({},e,{refScheme:o.WELL_LICENSE_AREA,columns:f})));a.a=h},"./src/refs/well_refs/WellPlaces.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("../biz/dist/index.js")),r=(t.n(o),t("./src/refs/RefTemplate/RefTemplate.tsx")),s=t("./src/refs/RefNameInput.tsx"),i=t("./src/smart/forkConnect.tsx"),l=t("./src/grids/grid/Grid.tsx"),d=t("./src/refs/refUtils.ts");const u=Object(s.a)(o.WELL_PLACE),c=[{title:n.createElement("span",{style:{float:"left"}},"Название"),dataIndex:"name",classNames:[l.a.cellClasses.noCellPadding],render:(e,a,t)=>u(a,t.props.dispatch)},{title:"Создал",dataIndex:"creatorUserId",classNames:[l.a.cellClasses.noCellPadding],render:e=>n.createElement("div",{style:{float:"right"}},Object(d.a)(e))}],m=Object(i.a)(e=>({data:Object(o.schemeLens)(o.WELL_PLACE).get(e),users:Object(o.schemeLens)(o.USER).get(e)}))(e=>n.createElement(r.a,Object.assign({},e,{refScheme:o.WELL_PLACE,columns:c})));a.a=m},"./src/refs/well_refs/WellPurposes.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("../biz/dist/index.js")),r=(t.n(o),t("./src/refs/RefTemplate/RefTemplate.tsx")),s=t("./src/refs/RefNameInput.tsx"),i=t("./src/smart/forkConnect.tsx"),l=t("./src/grids/grid/Grid.tsx"),d=t("./src/refs/refUtils.ts");const u=Object(s.a)(o.WELL_PURPOSE),c=[{title:n.createElement("span",{style:{float:"left"}},"Название"),dataIndex:"name",classNames:[l.a.cellClasses.noCellPadding],render:(e,a,t)=>u(a,t.props.dispatch)},{title:"Создал",dataIndex:"creatorUserId",classNames:[l.a.cellClasses.noCellPadding],render:e=>n.createElement("div",{style:{float:"right"}},Object(d.a)(e))}],m=Object(i.a)(e=>({data:Object(o.schemeLens)(o.WELL_PURPOSE).get(e),users:Object(o.schemeLens)(o.USER).get(e)}))(e=>n.createElement(r.a,Object.assign({},e,{refScheme:o.WELL_PURPOSE,columns:c})));a.a=m},"./src/refs/well_refs/WellStatuses.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("../biz/dist/index.js")),r=(t.n(o),t("./src/refs/RefTemplate/RefTemplate.tsx")),s=t("./src/refs/RefNameInput.tsx"),i=t("./src/smart/forkConnect.tsx"),l=t("./src/grids/grid/Grid.tsx"),d=t("./src/refs/refUtils.ts");const u=Object(s.a)(o.WELL_STATUS),c=[{title:n.createElement("span",{style:{float:"left"}},"Название"),dataIndex:"name",classNames:[l.a.cellClasses.noCellPadding],render:(e,a,t)=>u(a,t.props.dispatch)},{title:"Создал",dataIndex:"creatorUserId",classNames:[l.a.cellClasses.noCellPadding],render:e=>n.createElement("div",{style:{float:"right"}},Object(d.a)(e))}],m=Object(i.a)(e=>({data:o.WELL_STATUS.asMap()(e),users:o.USER.asMap()(e)}))(e=>n.createElement(r.a,Object.assign({},e,{refScheme:o.WELL_STATUS,columns:c})));a.a=m},"./src/roles/Rolebox/RoleBox.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/ramda/index.js")),r=(t.n(o),t("../biz/dist/index.js")),s=(t.n(r),t("./node_modules/styled-components/dist/styled-components.es.js")),i=t("./src/styles/font.ts"),l=t("./src/styles/restyle.ts"),d=t("./src/layout/Span.tsx"),u=t("./src/store/connectSpec.ts");const c=32,m=6,p=i.body2(l["a"]`
    margin-bottom: 0;
    display: inline-block;
    background-color: ${e=>e.color};
    height: ${c}px;
    width: 32px;
    line-height: 32px;
    border-radius: 50%;
    color: white;
    text-align: center;

    &:not(:first-of-type) {
        margin-left: ${m}px;
    }
`)(d.b),f=s["a"].div`
    overflow-x: hidden;
    word-wrap: break-word;
    white-space: pre;
`,h=Object(o.omit)(["roles","data"]),_=Object(o.compose)(Object(o.join)(""),Object(o.map)(o.toUpper),Object(o.map)(o.head),Object(o.take)(3),Object(o.split)(" ")),b=({roleId:e,color:a,name:t})=>n.createElement(p,{key:e,color:a},t&&_(t)),v=e=>n.createElement(f,Object.assign({},h(e)),(e=>Object(o.compose)(Object(o.map)(b),Object(o.map)(a=>e[a])))(e.roles)(e.values||[]));a.b=v;const y=Object(u.a)({roles:Object(r.schemeLens)(r.ROLE).get})(v);a.a=y},"./src/roles/RoleboxExtended/RoleBoxExtended.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/ramda/index.js")),r=(t.n(o),t("./node_modules/styled-components/dist/styled-components.es.js")),s=t("../utils/dist/index.js"),i=(t.n(s),t("./src/badges/BadgeExtended.tsx")),l=t("./src/badges/CreatingBadge.tsx"),d=t("./src/smart/contexted.ts"),u=t("./node_modules/prop-types/index.js"),c=(t.n(u),t("./node_modules/react-redux/es/index.js")),m=t("../biz/dist/index.js"),p=(t.n(m),this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)a.indexOf(n[o])<0&&(t[n[o]]=e[n[o]])}return t});const f=r["a"].div`
    display: flex;
    flex-flow: row wrap;
`,h=["roles","values","editable","onChange"],_=Object(o.pick)(h),b=Object(o.omit)([...h,"helperText"]),v=Object(o.pick)(["roles","values","onChange"]),y=e=>n.createElement(f,Object.assign({},b(e)),(({editable:e,roles:a,values:t})=>e&&!Object(o.eqProps)("length",Object.keys(a),t))(e)&&n.createElement(l.a,Object.assign({},v(e))),(({values:e,roles:a,editable:t,onChange:r})=>{return Object(s.toIndexedArray)(Object(o.pick)(e,a)).map(a=>n.createElement(i.a,{role:a,editable:t,key:a.name,onChange:a=>r(e.filter(e=>e!==a))}))})(_(e))),g=Object(c.b)(e=>({roles:m.ROLE.asMap()(e)}))(Object(d.a)({disabled:u.bool,readonly:u.bool})(e=>{var{readonly:a,disabled:t}=e,o=p(e,["readonly","disabled"]);return n.createElement(y,Object.assign({editable:!a&&!t},o))}));a.a=g},"./src/roles/StepRightInRole/RoleSetup.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/styles/SVGLibrary.tsx")),r=t("./src/layout/Div.tsx"),s=t("./src/styles/index.ts"),i=t("./src/layout/Span.tsx"),l=t("./src/styles/colors.ts"),d=t("./node_modules/ramda/index.js"),u=(t.n(d),this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)a.indexOf(n[o])<0&&(t[n[o]]=e[n[o]])}return t});const c=s["f"]`
    display: inline-flex;
    flex-direction: row-reverse;
`(r.a),m=s["f"]`
    display: flex;
    width: 144px;
    height: 64px;
    border: 0 solid ${l.m.DARK_BORDER_GRAY};

    border-bottom-width: 1px;
    border-left-width: 1px;
    &:first-child {
        border-right-width: 1px;
    }

    transition: background-color .25s ease-in;

    > * {
        margin: auto;
        transition: background-color .25s ease-in;
    }
    svg {
        transition: all .25s ease-in;
    }
`(r.a),p=s["f"]`
    border-radius: 50%;
    width: 32px;
    height: 32px;
    color: inherit;
    display: flex;
    > * {
        margin: auto;
    }
`(i.b),f=s["f"]`
    cursor: pointer;
    background-color: ${({checked:e})=>e?l.g:l.k};

    > * {
        background-color: ${({checked:e})=>e?l.h:l.k};
        opacity: ${({checked:e})=>e?1:0}
    }
    svg {
        fill: ${({checked:e})=>e?l.f:l.k};
    }

    &:hover ~ *,
    &:hover {
        background-color: ${l.h};

        > * {
            background-color: ${l.h};
            opacity: 1;
        }
        svg {
            fill: ${l.f};
        }
    }
`(m),h=s["f"]`
    background-color: ${l.g} !important;

    > * {
        background-color: ${l.e} !important;
    }
    svg {
        fill: ${l.l} !important;
    }
`(m),_=({onChange:e,disabled:a,checked:t})=>a?n.createElement(h,null,n.createElement(p,null,n.createElement(o.b.CloseCross,null))):n.createElement(f,Object.assign({onClick:e},{checked:t}),n.createElement(p,null,n.createElement(o.b.RoleCheck,null))),b=e=>a=>(({value:e,onChange:a,disabled:t},o)=>n.createElement(_,{key:o,checked:o<=e,disabled:(e=>a=>e&&e.includes(a))(t)(o),onChange:()=>a(o===e?0:o)}))(e,a);a.a=(e=>{var{count:a}=e,t=u(e,["count"]);return n.createElement(c,null,Object(d.times)(d.inc,a).reverse().map(b(Object.assign({},t))))})},"./src/sidebarMenu/SidebarMenu.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/ramda/index.js")),r=(t.n(o),t("./node_modules/styled-components/dist/styled-components.es.js")),s=t("./src/smart/makeValue.ts"),i=t("./src/layout/Div.tsx"),l=t("./src/styles/index.ts");const d=Object(o.omit)(["icon","label","selected","number","onSelectChange"]),u=l["f"]`
    height: 48px;
    display: flex;
    align-items: center;

    &:hover {
        cursor: pointer;
    }
`(i.a),c=l["f"]`
    margin: 0 32px 0 16px;
    color: ${e=>e.selected?l.e.SELECTED_BLUE:l.e.SOFT_BLACK};
`(i.a),m=l["f"]`
    background-color: ${e=>e.selected?l.e.SELECTED_GRAY:l.e.WHITE};
    color: ${e=>e.selected?l.e.SELECTED_BLUE:l.e.DEFAULT_BLACK};
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
`(e=>n.createElement("div",Object.assign({},d(e),{onClick:()=>e.onChange(e.item)}),n.createElement(u,null,n.createElement(c,null,e.item.icon),e.item.label))),p=Object(r["a"])(i["a"])`
    height: 100%;
    width: 280px;
    background-color: ${l.e.WHITE};
    display: flex;
    flex-direction: column;
`,f=l["f"]`
    background-color: ${l.e.DEEP_BLUE};
    height: 56px;
    margin-bottom: 9px;
`(i.a),h=l["f"]`
    float: right;
    margin: 13px 16px 13px 0;
`(i.a),_=l["f"]`
    color: ${l.e.WHITE};
    font-family: Roboto;
    font-size: 14px;
    font-style: italic;
    font-weight: bold;
`(i.a),b=l["f"]`
    color: ${l.e.WHITE};
    font-family: Roboto;
    font-size: 10px;
    line-height: 11px;
`(i.a),v=Object(s.a)();a.a=v.ap(e=>n.createElement(p,{tabIndex:0},n.createElement(f,null,n.createElement(h,null,n.createElement(_,null," Отчетность"),n.createElement(b,null," Версия 2.0"))),e.items.map(a=>n.createElement(m,{key:a.index.path,item:a.index,onChange:e.onChange,selected:a===e.value}))))},"./src/smart/Form.ts":function(e,a,t){"use strict";var n=t("./src/smart/Pure.ts"),o=t("./node_modules/ramda/index.js"),r=(t.n(o),t("../biz/dist/index.js")),s=(t.n(r),t("../root/dist/index.js"));t.n(s);const i=e=>(a={errors:{},model:{},isValid:!0},t)=>{if("onChange"===t.type||"init"===t.type){const t=Object(s.getStore)().getState();let n=Object(o.assocPath)(["errors"],e(a.model,t),a);return n=Object(o.assocPath)(["isValid"],Object(o.isEmpty)(n.errors),n)}return a},l=()=>Object(n.a)().addMsg((()=>({onChange:Object(n.b)("onChange"),onSubmit:Object(n.b)("onSubmit"),onCancel:Object(n.b)("onCancel")}))()).addReducer((()=>(e={model:{},initial:void 0},a)=>"onChange"===a.type?Object(o.assocPath)(["model",a.payload.property],a.payload.value,e):e)()).addReducer((()=>(e={touched:{},onlyTouchedErrors:!1},a)=>"onChange"===a.type?Object(o.assocPath)(["touched",a.payload.property],!0,e):e)());a.a=((e,a)=>l().addProps({scheme:e,forked:!0}).recieveProps((t,n,s)=>{let l={};return n.forked!==s.forked&&(l=Object.assign({},{touched:{}})),s.forked&&!Object(o.isEmpty)(t.touched)||(l=Object.assign({},{model:s.model})),t.model===s.model||s.forked||(l=Object.assign(t,{model:s.model,touched:{}}),l=i(Object(r.createSpec)(e,a||Object(o.keys)(e.properties)))(l,{type:"init"})),Object.assign({},t,l)}).addReducer((e=>(a,t)=>a.scheme?a:Object.assign({},a,{scheme:e}))(e)).addReducer(i(Object(r.createSpec)(e,a||Object(o.keys)(e.properties)))).addEff((()=>({onValid:Object(n.b)("onValid"),onInvalid:Object(n.b)("onInvalid")}))()).addResolver((e,a,t)=>Object(o.isEmpty)(t.errors)?e.onValid(t.model):e.onInvalid(t.model)))},"./src/smart/Pure.ts":function(e,a,t){"use strict";var n=t("./src/store/getFrontendStore.ts"),o=t("./node_modules/react/index.js"),r=(t.n(o),t("./node_modules/ramda/index.js")),s=(t.n(r),t("./src/smart/fp/fp.ts")),i=t("./node_modules/react-dom/index.js"),l=(t.n(i),t("./node_modules/recompose/es/Recompose.js")),d=t("./node_modules/react-redux/es/index.js"),u=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)a.indexOf(n[o])<0&&(t[n[o]]=e[n[o]])}return t};const c=e=>a=>({type:e,payload:a});a.b=c;const m=(e,a,t=(e=>e),p=[],f={},h=[],_,b=[])=>{e=e||{},a=a||{};let v=class extends o.Component{constructor(n){super(n),this.signal=(e=>{this.currentState=t(this.currentState,e),this.setState(this.currentState),this.props[e.type]&&this.props[e.type](e.payload),p.map(e=>e(a,this.state,this.currentState)).filter(e=>void 0!==e).forEach(e=>this.props[e.type]&&this.props[e.type](e.payload))}),this.pureRefs={},this.makeRef=(e=>a=>{const t=i.findDOMNode(a);this.pureRefs[e]!==t&&(this.pureRefs[e]=t)}),this.bindedActions=Object(r.map)(e=>a=>this.signal(e(a)),e),this.setStateSignal=(e=>this.signal({type:"setState",payload:e}));const{init:o,children:s}=n,l=u(n,["init","children"]);this.currentState=this.state=l}componentDidMount(){this.currentState=t(this.state,{type:"init",payload:{}}),this.signal({type:"init"})}componentWillReceiveProps(e){const{init:a,children:n}=e,o=u(e,["init","children"]);this.currentState=t(this.currentState,{type:"nextProps",payload:{props:o,next:e}}),this.currentState=Object(r.mergeDeepRight)(this.currentState,o),this.setState(this.currentState)}render(){const e=this.props,{children:a}=e,t=(u(e,["children"]),Object.assign({dispatch:Object(n.a)().dispatch,makeRef:this.makeRef,pureRefs:this.pureRefs,setState:this.setStateSignal},this.state,this.bindedActions));let o=a;return(o=h.reduceRight((e,a)=>Object(l.f)({children:e})(a),o))&&o(t,this.context)}};_&&(v=_(v)),b.length&&(v=Object(d.b)((e,a)=>Object.assign({},...b.map(t=>t(e,a))))(v));const y={messages:e,effects:a,update:t,resolvers:p,ctx:f,components:h,hoc:_,stateMappers:b};return Object.assign(v,y,{Props:{},of:n=>m(e,a,t,p,f,[n],_,b),ap:n=>m(e,a,t,p,f,h.concat([n]),_,b),recieveProps:n=>m(e,a,Object(s.a)(t,(e,a)=>"nextProps"===a.type?Object.assign({},e,n(e,a.payload.props,a.payload.next)):e),p,f,h,_,b),contramap:n=>m(e,a,t,p,f,[n].concat(h),_,b),valueOf:()=>y,addMsg:n=>m(Object.assign({},e,n),Object.assign({},a,n),t,p,f,h,_,b),addReducer:n=>m(e,a,Object(s.a)(t,n),p,f,h,_,b),addEff:n=>m(Object.assign({},e,n),Object.assign({},a,n),t,p,f,h,_,b),addResolver:n=>m(e,a,t,p.concat([n]),f,h,_,b),concat:n=>m(Object.assign({},e,n.messages),Object.assign({},a,n.effects),Object(s.a)(n.update,t),[].concat(p,n.resolvers),f,h,_,b.concat(n.stateMappers)),connect:n=>m(e,a,t,p,f,h,_,n?b.concat([n]):b),addProps:n=>m(e,a,t,p,f,h,Object(l.b)(n),b),defaultProps:n=>m(e,a,t,p,f,h,Object(l.b)(n),b),addState:n=>m(e,a,t,p,f,h,_,b).addMsg((()=>({setState:c("setState")}))()).addReducer((e,a)=>"setState"===a.type?Object.assign({},e,a.payload):e)})};a.a=m},"./src/smart/RoutedPage.ts":function(e,a,t){"use strict";var n=t("./src/smart/Stateful.ts"),o=t("./src/app/navHelpers.tsx");const r=e=>e.match.params;a.a=class extends n.a{constructor(){super(...arguments),this.getParams=(()=>r(this.props)),this.renderChildRoutes=(()=>Object(o.c)(this.props.route))}}},"./src/smart/Stateful.ts":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js");t.n(n);a.a=class extends n.Component{constructor(e){super(e),this.stateKey=(e=>a=>this.setState({[e]:a})),this.state={}}}},"./src/smart/Toggle.tsx":function(e,a,t){"use strict";var n=t("./src/smart/Pure.ts"),o=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)a.indexOf(n[o])<0&&(t[n[o]]=e[n[o]])}return t};const r={onToggle:Object(n.b)("onToggle")},s={onToggleOn:Object(n.b)("onToggleOn"),onToggleOff:Object(n.b)("onToggleOff")},i=Object(n.a)().addMsg(r).addReducer((e,a)=>"onToggle"===a.type?Object.assign({},e,{on:!0!==a.payload||!1!==a.payload?!e.on:a.payload}):e),l=Object(n.a)().addReducer((e,a)=>{var{counter:t=1}=e,n=o(e,["counter"]);return Object.assign({},n,{counter:Number(t)+1})}),d=Object(n.a)().concat(i).addEff(s).addResolver((e,a,t)=>{if(a.on!==t.on)return t.on?e.onToggleOn():e.onToggleOff()}).concat(l);a.a=d},"./src/smart/caseRender.ts":function(e,a,t){"use strict";var n=t("./node_modules/ramda/index.js"),o=(t.n(n),t("./src/smart/renderChildren.ts"));a.a=function e(a,t=[]){t.length||(t=[{matcher:n.T,Comp:a}]);const r=(n,o)=>e(a,[...t,{matcher:n,Comp:o}]),s=(e,a)=>"function"==typeof e?r(e,a):((e,a)=>r(n.whereEq(e),a))(e,a),i=(e,a)=>{for(let a=t.length-1;a>=0;a--)if(t[a].matcher(e))return Object(o.a)(t[a].Comp,e);return null};return i.displayName=a.displayName,Object.assign(i,{match:s,isNil:(o,r)=>e(a,[...t,{matcher:e=>n.isNil(e[o]),Comp:r}]),isEmpty:(e,a)=>s(a=>n.isEmpty(a[e]),a),isNilOrEmpty:(o,r)=>e(a,[...t,{matcher:e=>n.isEmpty(e[o])||n.isNil(e[o]),Comp:r}])})}},"./src/smart/connectForm.ts":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/react-redux/es/index.js")),r=t("./src/store/configureStore.tsx");a.a=(e=>a=>Object(o.b)((a,t)=>({model:e.bySpec(t)(a)||{}}))(t=>n.createElement(a,Object.assign({},t,{forked:!1,onValid:a=>{Object(r.c)(e.update(t,a))},onInvalid:a=>{Object(r.c)(e.update(t,a))}}))))},"./src/smart/connectProp.ts":function(e,a,t){"use strict";var n=t("./node_modules/react-redux/es/index.js");a.a=((e,a,t)=>Object(n.b)((e,n)=>({[a]:t(n)(e)}))(e))},"./src/smart/contexted.ts":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js");t.n(n);a.a=(e=>a=>Object.assign((t,o)=>{const r=Object.keys(e).reduce((e,a)=>(e[a]=o[a],e),{});return n.createElement(a,Object.assign({},r,t))},{contextTypes:e}))},"./src/smart/declareProps.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/ramda/index.js")),r=(t.n(o),t("../utils/dist/index.js"));t.n(r);a.a=function(e){return function(a){return function(t){return n.createElement(a,Object.assign({},Object(o.omit)(Object(r.isArray)(e)?e:Object(o.keys)(e),t)))}}}},"./src/smart/defaultProps.ts":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js");t.n(n);a.a=function(e){return a=>(t,o)=>n.createElement(a,Object.assign({},e,t),t.children)}},"./src/smart/forkConnect.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/react-redux/es/index.js")),r=t("./src/store/configureStore.tsx"),s=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)a.indexOf(n[o])<0&&(t[n[o]]=e[n[o]])}return t};a.a=function(e){return a=>Object(o.b)(e=>({frontState:e}),e=>({dispatch:e}))(class extends n.Component{constructor(e){super(e),this.saveForkedState=(()=>{this.nextFrontState=this.state.frontState,this.localHistory=this.state.localHistory}),this.localHistory=[],this.localDispatch=(e=>{this.nextFrontState=Object(r.d)(this.nextFrontState,e),this.localHistory=(this.localHistory||[]).concat([e]),this.setState({frontState:this.nextFrontState,localHistory:this.localHistory},this.saveForkedState),this.props.onChange&&this.props.onChange(e,!0)}),this.forwardDispatch=(e=>{this.props.dispatch(e),this.props.onChange&&this.props.onChange(e,!1)}),this.commit=(()=>{this.props.forkDisabled||this.state.localHistory.forEach(this.props.dispatch),this.setState({forked:!1,localHistory:[]}),this.props.onCommit&&this.props.onCommit(this.state.localHistory),this.saveForkedState()}),this.fork=(()=>{this.setState({frontState:this.props.frontState,forked:!0,localHistory:[]}),this.props.onFork&&this.props.onFork(),this.saveForkedState()}),this.reset=(()=>{this.setState({frontState:this.props.frontState,forked:!1,localHistory:[]}),this.props.onReset&&this.props.onReset(),this.saveForkedState()}),this.state={frontState:e.frontState,forked:!!e.forked,localHistory:e.localHistory||[]},this.saveForkedState()}componentWillReceiveProps(e){void 0!==e.forked&&e.forked!==this.state.forked&&this.setState({frontState:e.frontState},this.saveForkedState),e.localHistory!==this.props.localHistory&&this.setState({localHistory:localHistory},this.saveForkedState)}render(){const t=this.props,{forked:o,dispatch:r,frontState:i}=t,l=s(t,["forked","dispatch","frontState"]),d=e(this.state.frontState,l||{});return this.state.forked&&!this.props.forkDisabled?n.createElement(a,Object.assign({},l,{fork:this.fork,commit:this.commit,forked:this.state.forked,reset:this.reset,dispatch:this.localDispatch,localHistory:this.state.localHistory,frontState:this.state.frontState},d)):n.createElement(a,Object.assign({},l,{fork:this.fork,commit:this.commit,forked:this.state.forked,reset:this.reset,frontState:this.props.frontState,dispatch:this.forwardDispatch,localHistory:this.state.localHistory},e(this.props.frontState,l)))}})}},"./src/smart/form/DialogEditForm.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/styled-components/dist/styled-components.es.js")),r=t("./src/layout/index.ts"),s=t("./node_modules/material-ui/Dialog/index.js"),i=(t.n(s),t("./src/controls/index.ts")),l=t("./src/InputProvider.ts"),d=t("./src/smart/Stateful.ts"),u=t("./src/layout/Paper.tsx"),c=t("./src/smart/renderChildren.ts"),m=t("./src/styles/index.ts"),p=t("./src/layout/PageDiv.ts");const f=Object(o["a"])(r["a"])`
    .dialog {
        max-width: 2048px !important;
        width: max-content;
    }
`,h=m["f"]`
    z-index: 1;
    background-color: #f5f5f6;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: calc(100vh - ${p.a}px);
    overflow: auto;
`(r.a),_=m["f"]`
    margin: auto;
    display: inline-block;
`(r.a);a.a=class extends d.a{constructor(e){super(e),this.lockBodyOverflow=(()=>{document.body.classList.toggle("lockedOverflow",!0)}),this.unlockBodyOverflow=(()=>{document.body.classList.toggle("lockedOverflow",!1)}),this.open=(()=>{const{onOpen:e}=this.props;this.lockBodyOverflow(),this.setState({open:!0}),e&&e()}),this.close=(()=>{const{onClose:e}=this.props;this.setState({open:!1}),this.unlockBodyOverflow(),e&&e()}),this.save=(()=>{const{onEdit:e}=this.props;e&&e(this.state.model),this.close()}),this.toggleEditForm=(()=>this.state.open?this.close():this.open()),this.renderEditor=(()=>{const{viewer:e,editor:a,model:t}=this.props,o=a||e;return n.createElement(h,null,n.createElement(r.f,{hasBackButton:!1},n.createElement(_,null,n.createElement(u.a,null,n.createElement(l.a,null,Object(c.a)(o,{model:this.state.open?this.state.model:t,onValid:e=>this.setState({isValid:!0,model:e,isTouched:!0}),onInvalid:e=>this.setState({isValid:!1,model:e,isTouched:!0})}))),n.createElement(s.DialogActions,null,n.createElement(i.b,{onClick:this.close},"Отменить"),n.createElement(i.b,{disabled:!this.state.isValid||!this.state.isTouched,onClick:this.save,primary:!0},"Сохранить изменения")))))});const{model:a,open:t}=e;this.state={model:a,open:t}}componentWillUnmount(){this.unlockBodyOverflow()}componentWillReceiveProps(e){e.open!==this.state.open&&(e.open?this.setState(()=>({open:e.open,model:e.model,isTouched:!1}),()=>{this.lockBodyOverflow()}):this.setState(()=>({open:e.open}),()=>{this.unlockBodyOverflow()}))}render(){const{viewer:e,model:a}=this.props;return n.createElement(f,null,n.createElement(l.a,{readonly:!0},n.createElement(u.a,null,Object(c.a)(e,{model:a,toggleEditForm:this.toggleEditForm,style:{display:"inline-block"}}))),this.state.open&&this.renderEditor())}}},"./src/smart/form/DialogEditFormUC.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/styles/SVGLibrary.tsx")),r=t("./src/smart/form/DialogEditForm.tsx"),s=t("./node_modules/styled-components/dist/styled-components.es.js"),i=t("./src/layout/Div.tsx"),l=t("./src/layout/Span.tsx"),d=t("./src/styles/colors.ts"),u=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)a.indexOf(n[o])<0&&(t[n[o]]=e[n[o]])}return t};const c=Object(s["a"])(i["a"])`
    ${e=>e.stretch?"\n                display: block;\n                width: 100%;\n            ":"\n                display: inline-block;\n                width: max-content;\n            "}
    position: relative;

    &:hover > *:first-child {
        opacity: 1;
    }
`,m=Object(s["a"])(l["b"])`
    cursor: pointer;
    opacity: 0;
    z-index: 1;
    width: 40px;
    height: 36px;
    position: absolute;
    right: 16px;
    top: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${d.i};
    transition: all .25s ease-in;

    color: ${d.l};
    box-shadow: 0 0 0 0 ${d.k};

    border-radius: 2px;

    &:hover {
        box-shadow: 0 2px 2px 0 rgba(37, 37, 37, 0.24), 0 0 2px 0 rgba(37, 37, 37, 0.12);
        background-color: ${d.a};
    }
`;class p extends n.Component{constructor(e){super(e),this.toggle=(()=>this.setState({open:!this.state.open})),this.state={open:!1}}render(){const e=this.props,{stretch:a}=e,t=u(e,["stretch"]);return n.createElement(c,{stretch:a},this.props.withEditButton&&n.createElement(m,{onClick:this.toggle},n.createElement(o.b.Edit,null)),n.createElement(r.a,Object.assign({open:this.state.open,onClose:this.toggle},t)))}}a.a=p,p.defaultProps={withEditButton:!0}},"./src/smart/form/bindInput.ts":function(e,a,t){"use strict";var n=t("../biz/dist/index.js"),o=(t.n(n),t("./node_modules/ramda/index.js")),r=(t.n(o),t("./node_modules/moize/es/index.js"));const s=Object(r.a)((e,a)=>(t,n)=>{t.property&&t.value?n=t.value:"boolean"!=typeof n&&(n=t.target?t.target.value:t),a&&a({property:e,value:n})},{maxSize:1e4});a.b=(e=>a=>{const t="string"==typeof a.scheme?n.schemes[a.scheme]:a.scheme;return a.onlyTouchedErrors?{value:a.model&&a.model[e]||"",onChange:s(e,a.onChange),required:t&&t.properties&&t.properties[e]&&t.properties[e].required,error:a.touched&&a.touched[e]&&a.errors&&a.errors[e]&&Boolean(a.errors[e][0]),helperText:a.touched&&a.touched[e]&&a.errors&&a.errors[e]&&a.errors[e][0]||a.helperText,scheme:t,property:e}:{value:a.model&&a.model[e]||"",onChange:s(e,a.onChange),required:t&&t.properties&&t.properties[e]&&t.properties[e].required,error:a.errors&&a.errors[e]&&Boolean(a.errors[e][0]),helperText:a.errors&&a.errors[e]&&a.errors[e][0]||a.helperText,scheme:t,property:e}});a.a=(e=>a=>{const t=Object(o.head)(e),n=Object(o.tail)(e);return{value:Object(o.path)(e,a.model),onChange:e=>{a.onChange({property:t,value:Object(o.assocPath)(n,e,a.model[t])})}}})},"./src/smart/fp/fp.ts":function(e,a,t){"use strict";var n=t("./node_modules/ramda/index.js");t.n(n);const o=e=>null===e||void 0===e?[]:Array.isArray(e)?e:[e],r=(e,a)=>((...e)=>(a,t)=>e.reduce((e,a)=>a(e,t),a))(e,a),s=r;a.a=s;const i=e=>Object(n.lens)(Object(n.path)(o(e)),Object(n.assocPath)(o(e)));i("num"),i("log")},"./src/smart/genericForm.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/smart/Form.ts")),r=t("./node_modules/ramda/index.js"),s=(t.n(r),t("./src/layout/FormSection.tsx")),i=t("./src/inputs/GenericInput.tsx"),l=t("./src/smart/form/bindInput.ts");const d={withHeader:!0};a.a=function(e,a,t=d){return a=a||r.keys(e.properties),Object(o.a)(e,a).ap(o=>{const d=r.map(a=>n.createElement(i.a,Object.assign({},Object(l.b)(a)(o),{key:a,scheme:e,property:a})),a);return t.withHeader?n.createElement(s.b,{label:e.lang.singular},d):d})}},"./src/smart/makeValue.ts":function(e,a,t){"use strict";var n=t("./src/smart/Pure.ts");a.a=(e=>Object(n.a)().addMsg((()=>({onChange:Object(n.b)("onChange")}))()).addReducer((a,t)=>"onChange"===t.type?Object.assign({},a,{value:t.payload}):void 0===a.value?Object.assign({},a,{value:e}):a))},"./src/smart/props.ts":function(e,a,t){"use strict";var n=t("./node_modules/react-redux/es/index.js"),o=t("./node_modules/recompose/es/Recompose.js");a.a=(e=>{const a=(e,t=[],r=[])=>{const s=(e,a)=>t.reduce((a,t)=>Object.assign({},a,{[t.key]:((e,a,t)=>{try{return e(a)(t)}catch(n){console.info("Selector error",n,e.name,a,t)}})(t.selector,a,e)}),a),i=s.length?Object(n.b)(s)(e):e;return Object.assign(i,{connectProp:(n,o)=>a(e,[...t,{key:n,selector:o}],r),withProps:n=>a(o.f(n)(e),t),withProp:(n,r)=>a(o.f({[n]:r})(e),t),defaultProp:(n,r)=>a(o.b({[n]:r})(e),t)})};return a})()},"./src/smart/renderChildren.ts":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/ramda/index.js"));t.n(o);a.a=((e,a)=>{const t=a?e===a.children?Object(o.omit)(["children"],a):a:{};return"function"==typeof e?n.createElement(e,t):e})},"./src/store/biz.ts":function(e,a,t){"use strict";var n=t("../biz/dist/index.js"),o=(t.n(n),t("./node_modules/moment/moment.js"));t.n(o);t.o(n,"JOB")&&t.d(a,"JOB",function(){return n.JOB}),t.o(n,"REPORT")&&t.d(a,"REPORT",function(){return n.REPORT}),t.o(n,"getScheme")&&t.d(a,"getScheme",function(){return n.getScheme}),t.o(n,"getSearchableProps")&&t.d(a,"getSearchableProps",function(){return n.getSearchableProps}),t.o(n,"reducer")&&t.d(a,"reducer",function(){return n.reducer});a.middleware=(e=>a=>t=>{if(Object(n.isBizAction)(t)&&!t.guid){const r=e.getState().credentials.userId;if(t.payload.userId=r,t.type.endsWith(n.CREATED_POSTFIX)&&!t.payload.patch.creatorUserId&&!t.payload.patch.creationDate){const a=e.getState().credentials.userId,n=o().format();t.payload.patch.creatorUserId=a,t.payload.patch.creationDate=n}return a(t)}return a(t)})},"./src/store/caseReducer.ts":function(e,a,t){"use strict";var n=t("../fsa/dist/index.js"),o=(t.n(n),t("./node_modules/ramda/index.js"));t.n(o);const r=(e,a)=>(a=a||(e=>(a=e,t)=>a)(e),Object.assign(a,{merge:(t,s)=>r(e,(r=e,i)=>(t=t,Object(n.isType)(t)(i)?Object(o.merge)(r,s(r,i)):a(r,i)))}));a.a=r},"./src/store/configureStore.tsx":function(e,a,t){"use strict";t.d(a,"c",function(){return L}),t.d(a,"a",function(){return z});var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/redux/es/index.js")),r=t("./src/store/biz.ts"),s=t("./node_modules/history/createBrowserHistory.js"),i=t.n(s),l=t("./node_modules/react-router-redux/es/index.js"),d=t("./src/store/middlewares/ioMiddleware.ts"),u=t("./src/store/credentials.ts"),c=t("../root/dist/index.js"),m=(t.n(c),t("./src/store/connection.ts")),p=t("./src/store/sagas/frontSaga.ts"),f=t("./node_modules/redux-saga/es/index.js"),h=t("./src/store/history.ts"),_=t("./src/store/ui.ts"),b=t("./src/store/saveModificationDate.ts"),v=t("./node_modules/react-redux/es/index.js"),y=t("../utils/dist/index.js");t.n(y);t.o(c,"getStore")&&t.d(a,"e",function(){return c.getStore});const g="__REDUX_DEVTOOLS_EXTENSION__",k=Object(o.c)({biz:r.reducer,history:h.reducer,routing:l.f,credentials:u.b,connection:m.b,frontConfig:()=>Object(y.isFrontend)()?window.frontConfig:{env:"node"},ui:_.b});a.d=k;const j=i()();a.b=j;const x=Object(f.a)(),w=Object(l.e)(j),M=()=>window[g]?Object(o.d)(Object(o.a)(x),Object(o.a)(w),Object(o.a)(h.middleware),Object(o.a)(d.a),Object(o.a)(b.a),Object(o.a)(r.middleware),window[g]()):Object(o.d)(Object(o.a)(x),Object(o.a)(w),Object(o.a)(h.middleware),Object(o.a)(d.a),Object(o.a)(b.a),Object(o.a)(r.middleware)),S=(e=>{const a=Object(c.setStore)(Object(o.e)(k,e,M()));a.getState().frontConfig;return a.runSaga=x.run,a.runSaga(p.b),a})(),L=e=>S.dispatch(e),z=e=>n.createElement(v.a,Object.assign({store:e.store||Object(c.getStore)()},e),e.children)},"./src/store/connectSpec.ts":function(e,a,t){"use strict";var n=t("./node_modules/react-redux/es/index.js"),o=t("./node_modules/ramda/index.js");t.n(o);a.a=(e=>a=>Object(n.b)(Object(o.applySpec)(e))(a))},"./src/store/connection.ts":function(e,a,t){"use strict";var n=t("../fsa/dist/index.js");t.n(n);const o=n.actionCreatorFactory("connection"),r={connected:o("CONNECTED"),disconnected:o("DISCONNECTED"),error:o("ERROR"),failed:o("FAILED"),gatewayChanged:o("GATEWAY_CHANGED"),fetchStateRequested:o("FETCH_STATE_REQUESTED"),fetchStateSuccess:o("FETCH_STATE_SUCCESS"),fetchStateFailed:o("FETCH_STATE_FAILED")};a.a=r;const s=n.reducerWithInitialState({isConnected:!1}).case(r.connected,e=>Object.assign({},e,{isConnected:!0,error:void 0})).case(r.disconnected,e=>Object.assign({},e,{isConnected:!1})).case(r.error,(e,a)=>Object.assign({},e,{error:a})).case(r.gatewayChanged,(e,a)=>Object.assign({},e,{gateway:a,error:void 0}));a.b=s},"./src/store/createRoleRights.ts":function(e,a,t){"use strict";var n=t("../utils/dist/index.js");t.n(n);const o={users:"Управление пользователями",wells:"Управление скважинами",refs:"Управление справочниками",reports:"Управление рапортами",motors:"Управление motors",drill:"Управление буровыми установками",survey:"Управление опросными листами"};a.b=o;a.c=["Просмотр","Редактирование","Создание"];a.a=(e=>Object(n.toAssociativeArray)("idKey")(r(e)));const r=e=>Object.keys(e).map(a=>s(a,e[a])),s=(e,a)=>({idKey:e,label:o[e],description:"Описание права доступа",value:a,disabledValues:[]})},"./src/store/credentials.ts":function(e,a,t){"use strict";var n=t("../fsa/dist/index.js"),o=(t.n(n),t("../isomorphic/dist/index.js")),r=(t.n(o),t("./src/store/getFrontendStore.ts")),s=t("./src/store/caseReducer.ts");const i={setCredentials:Object(n.actionCreatorFactory)("clientState")("SET_CREDENTIALS")};a.a=i;const l=Object(s.a)({loggedIn:!0,userId:"0"}).merge(i.setCredentials,(e,{payload:a})=>a).merge(o.actions.client.authRequest,(e,{payload:a})=>Object.assign({authRequested:!0,wrongCredentials:!1},a)).merge(o.actions.backend.authSuccess,(e,{payload:a})=>Object.assign({authRequested:!1,wrongCredentials:!1},a)).merge(o.actions.backend.authFailed,(e,{payload:a})=>Object.assign({authRequested:!1,wrongCredentials:!0},a));a.b=l;a.c=((e=Object(r.a)().getState())=>e.credentials)},"./src/store/front.ts":function(e,a){},"./src/store/getFrontendStore.ts":function(e,a,t){"use strict";var n=t("./src/store/configureStore.tsx");a.a=(()=>n.e())},"./src/store/history.ts":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t("../fsa/dist/index.js");t.n(n);const o=n.actionCreatorFactory("history");a.factory=o;a.PUSH_POSTFIX="PUSH";a.POP_POSTFIX="POP";const r={push:o("PUSH"),pop:o("POP")};a.actions=r;const s={appHistory:[]};a.reducer=((e=s,a)=>{if(Object(n.isType)(r.push)(a)){const t=e.appHistory;return t.push(a.payload),{appHistory:t}}if(Object(n.isType)(r.pop)(a)){const a=e.appHistory;return a.pop(),a.pop(),{appHistory:a}}return e});a.middleware=(e=>a=>t=>("@@router/LOCATION_CHANGE"===t.type&&t.payload&&e.dispatch(r.push(t.payload.pathname)),a(t)))},"./src/store/index.ts":function(e,a,t){"use strict";var n=t("./src/store/history.ts"),o=(t("./src/store/credentials.ts"),t("./src/store/front.ts"));t.n(o),t("./src/store/connection.ts");t.d(a,"a",function(){return n})},"./src/store/middlewares/WSFront.ts":function(e,a,t){"use strict";var n=t("./src/store/getFrontendStore.ts"),o=t("./src/store/connection.ts");const r=console;a.a=class{constructor(){this._connected=!1,this.connect=((e,a)=>{if(e&&a){if(e===this.gateway)return;this.store=a,this.gateway=e}if(this.gateway){this.gateway=this.gateway.replace("http://","ws://"),this.gateway.endsWith("/test")||(this.gateway+="/test"),this.gateway.includes("ws://")||(this.gateway="ws://"+this.gateway),this.ws&&this.freeSocket();try{this.ws=new WebSocket(this.gateway),this.ws.addEventListener("open",this.openListener),this.ws.addEventListener("close",this.closeListener),this.ws.addEventListener("error",this.closeListener),this.ws.addEventListener("message",this.messageListener)}catch(e){Object(n.a)().dispatch(o.a.error("Не удалось подключиться к серверу"))}}}),this.closeListener=(()=>{Object(n.a)().dispatch(o.a.failed("any")),r.warn("socket closed"),this.freeSocket(),this.reconnectTimeoutId=setTimeout(this.connect,1e3)}),this.openListener=(()=>{this._connected=!0,Object(n.a)().dispatch(o.a.connected())}),this.messageListener=(e=>{const a=JSON.parse(e.data);r.info("Recieve message",a),Object(n.a)().dispatch(a)}),this.send=(e=>this.ws.send(JSON.stringify(e))),this.freeSocket=(()=>{clearTimeout(this.reconnectTimeoutId),this._connected=!1,this.ws.removeEventListener("open",this.openListener),this.ws.removeEventListener("close",this.closeListener),this.ws.removeEventListener("error",this.closeListener),this.ws.removeEventListener("message",this.messageListener),this.ws.close()}),this.dispose=(()=>this.freeSocket())}get connected(){return this._connected}}},"./src/store/middlewares/ioMiddleware.ts":function(e,a,t){"use strict";var n=t("./src/store/middlewares/WSFront.ts"),o=t("../fsa/dist/index.js"),r=(t.n(o),t("../isomorphic/dist/index.js")),s=(t.n(r),t("./src/store/connection.ts")),i=t("./src/store/credentials.ts");const l=new n.a;a.a=(e=>a=>t=>{const n=a(t);return"function"!=typeof t&&(o.isType(s.a.gatewayChanged)(t)?l.connect(t.payload,e):o.isType(r.actions.client.authRequest)(t)?l.connected&&l.send(Object.assign({},t,{payload:i.c()})):o.isNamespace(r.actions.client.factory)(t)&&l.connected&&l.send(t)),n})},"./src/store/sagas/connectionStatusSaga.ts":function(e,a,t){"use strict";a.a=function*(){for(;;){yield Object(n.h)(Object(o.anyPass)([Object(s.isType)(r.a.gatewayChanged),Object(s.isType)(r.a.error)]));console.log("Соединение с сервером",0);let{connected:e,changed:a,disconnected:t}=yield Object(n.f)({connected:Object(n.h)(Object(s.isType)(r.a.connected)),changed:Object(n.h)(Object(s.isType)(r.a.gatewayChanged)),disconnected:Object(n.h)(Object(s.isType)(r.a.disconnected))});if(e){console.log("Соединение установлено");let e=yield Object(n.g)();localStorage.setItem(i.a.GATEWAY,e.connection.gateway)}}};var n=t("./node_modules/redux-saga/es/effects.js"),o=t("./node_modules/ramda/index.js"),r=(t.n(o),t("./src/store/connection.ts")),s=t("../fsa/dist/index.js"),i=(t.n(s),t("./src/store/sagas/frontSaga.ts"))},"./src/store/sagas/exchangeSaga.ts":function(e,a,t){"use strict";t("./src/store/getFrontendStore.ts");var n=t("../fsa/dist/index.js"),o=(t.n(n),t("../biz/dist/index.js")),r=(t.n(o),t("../isomorphic/dist/index.js")),s=(t.n(r),t("./node_modules/redux-saga/es/effects.js")),i=t("../random/dist/index.js"),l=(t.n(i),t("./src/store/ui.ts"));n.actionCreatorFactory("approve");const d=[],u=e=>o.isBizAction(e)&&!d.includes(e.guid),c=e=>o.isBizAction(e)&&void 0===e.guid;function*m(){let e;for(yield s.h(n.isType(o.actions.reset));;){yield Object(s.g)();e=yield s.h(c),yield Object(s.e)(l.a.showMessage(o.getShortMessage(e)));const a=yield s.a(e=>o.isBizAction(e)&&void 0!==e.guid);yield Object(s.c)(a);{const a=i.generateGuid();d.push(a);const t=[Object.assign({},e,{guid:a})];yield Object(s.e)(l.a.hideMessage()),yield Object(s.e)(r.actions.client.push(t))}}}function*p(){const e=yield s.a(Object(n.isNamespace)(r.actions.master));for(;;){const a=yield s.h(e);if(a.payload)for(let e=0;e<a.payload.length;e++){console.log("recieve event from master",a.payload);const t=a.payload[e];u(t)&&(yield Object(s.e)(t))}}}a.a=function*(){yield Object(s.d)(m),yield Object(s.d)(p)}},"./src/store/sagas/fetchState.ts":function(e,a,t){"use strict";var n=t("../biz/dist/index.js"),o=(t.n(n),t("./src/store/connection.ts")),r=t("./node_modules/redux-saga/es/effects.js");a.a=function*(){const e=yield Object(r.g)();try{const a=yield Object(r.b)(s,e.connection.gateway,e.credentials.login,e.credentials.password);yield Object(r.e)(o.a.fetchStateSuccess(a)),yield Object(r.e)(n.actions.reset({biz:a.biz}))}catch(e){yield Object(r.e)(o.a.fetchStateFailed(JSON.stringify(e)))}};const s=(e,a,t)=>new Promise((n,o)=>{let r=e+"/api/clientState/";r.startsWith("http://")||(r="http://"+r);const s=new XMLHttpRequest;s.open("POST",r),s.setRequestHeader("Content-Type","application/json"),s.onload=function(){if(200===s.status){console.time("parseState");const e=JSON.parse(s.responseText);n(e),console.timeEnd("parseState")}},s.onerror=function(){o(s.status)},s.send(JSON.stringify({login:a,password:t}))})},"./src/store/sagas/frontSaga.ts":function(e,a,t){"use strict";var n=t("./node_modules/redux-saga/es/effects.js"),o=t("./src/store/connection.ts"),r=t("../fsa/dist/index.js"),s=(t.n(r),t("./src/store/sagas/connectionStatusSaga.ts")),i=t("./src/store/sagas/fetchState.ts"),l=t("./node_modules/react-router-redux/es/index.js"),d=t("./src/app/nav.tsx"),u=t("../isomorphic/dist/index.js"),c=(t.n(u),t("./src/store/credentials.ts")),m=t("./src/store/ui.ts"),p=t("./src/store/sagas/exchangeSaga.ts");const f=console.warn,h={GATEWAY:"GATEWAY",LOGIN:"LOGIN",PASSWORD:"PASSWORD"};function*_(){yield b(),yield Object(n.i)(Object(r.isType)(o.a.failed),b)}function*b(){const e=(yield Object(n.g)()).connection.gateway||localStorage.getItem(h.GATEWAY)||"http://192.168.0.123:8000",a=localStorage.getItem(h.LOGIN),t=localStorage.getItem(h.PASSWORD);if(e&&window.location.pathname.includes("auth"))yield Object(n.e)(o.a.gatewayChanged(e)),yield Object(n.e)(c.a.setCredentials({login:"admin",password:"111111"}));else if(e&&!window.location.pathname.includes("auth")){yield Object(n.e)(m.a.busy()),yield Object(n.e)(o.a.gatewayChanged(e));const{succ:s,fail:i}=yield Object(n.f)({succ:Object(n.h)(Object(r.isType)(o.a.connected)),fail:Object(n.h)(Object(r.isType)(o.a.failed))});s&&a&&t?(yield Object(n.e)(c.a.setCredentials({login:a,password:t})),yield Object(n.e)(u.actions.client.authRequest())):(yield Object(n.e)(m.a.unbusy()),yield Object(n.e)(Object(l.d)(d.a.auth.index.path)))}}function*v(){for(;;){yield Object(n.h)(Object(r.isType)(u.actions.client.authRequest)),yield Object(n.e)(m.a.busy());const{success:e,fail:a}=yield Object(n.f)({success:Object(n.h)(Object(r.isType)(u.actions.backend.authSuccess)),fail:Object(n.h)(Object(r.isType)(u.actions.backend.authFailed))});if(f(e,a),e){f("authorized, await for logout");const e=yield Object(n.g)();localStorage.setItem(h.GATEWAY,e.connection.gateway),localStorage.setItem(h.LOGIN,e.credentials.login),localStorage.setItem(h.PASSWORD,e.credentials.password),yield Object(n.e)(o.a.fetchStateRequested(""));const{success:a,fail:t}=yield Object(n.f)({success:Object(n.h)(Object(r.isType)(o.a.fetchStateSuccess)),fail:Object(n.h)(Object(r.isType)(o.a.fetchStateFailed))});f("race completed"),a&&(f("Fetch state success"),window.location.pathname.includes("app")||(yield Object(n.e)(Object(l.d)(d.a.app.access.users.index.path))),yield Object(n.e)(u.actions.client.subscribe({snapshotId:""}))),yield Object(n.e)(m.a.unbusy())}else yield Object(n.e)(m.a.unbusy())}}a.a=h,a.b=function*(){localStorage.getItem(h.GATEWAY);yield Object(n.d)(s.a),yield Object(n.d)(v),yield Object(n.d)(m.d),yield Object(n.d)(p.a),yield Object(n.d)(_),yield Object(n.i)(Object(r.isType)(o.a.fetchStateRequested),i.a);const e=yield Object(n.g)();e.connection&&e.connection.gateway}},"./src/store/saveModificationDate.ts":function(e,a,t){"use strict";var n=t("../biz/dist/index.js"),o=(t.n(n),t("../fsa/dist/index.js")),r=(t.n(o),t("./node_modules/moment/moment.js"));t.n(r);a.a=(e=>a=>t=>{if(Object(n.isBizAction)(t)){const a=t.type.split(o.factoryDelimeter)[1],s=n.schemes[a].properties;Object.keys(s).forEach(a=>{if(t.payload.patch[a]&&s[a].saveModificationDate&&!t.type.endsWith(n.CREATED_POSTFIX)){const n=`${a}_modificated`,o=e.getState().credentials?e.getState().credentials.userId:void 0;t.payload.patch[n]={},t.payload.patch[n].userId=o,t.payload.patch[n].modificationDate=r.now()}})}return a(t)})},"./src/store/ui.ts":function(e,a,t){"use strict";a.d=function*(){for(;;){const e=yield Object(s.h)(n.isType(d.confirmDialog)),{submit:a,cancel:t}=yield Object(s.f)({submit:Object(s.h)(n.isType(d.confirmSubmit)),cancel:Object(s.h)(n.isType(d.confirmCancel))});if(a){const a=Object(i.arrify)(e.payload.action);for(let e=0;e<a.length;e++)yield Object(s.e)(a[e])}}};var n=t("../fsa/dist/index.js"),o=(t.n(n),t("./src/store/caseReducer.ts")),r=t("./node_modules/redux/es/index.js"),s=t("./node_modules/redux-saga/es/effects.js"),i=t("../utils/dist/index.js");t.n(i);const l=n.actionCreatorFactory("ui"),d={showMessage:l("showMessage"),hideMessage:l("hideMessage"),reject:l("reject"),aks:l("ask"),busy:l("busy"),unbusy:l("unbusy"),confirmDialog:l("confirmDialog"),confirmSubmit:l("confirmSubmit"),confirmCancel:l("confirmCancel")};a.a=d;const u=Object(o.a)({text:void 0}).merge(d.showMessage,(e,{payload:a})=>({text:a})).merge(d.hideMessage,(e,{payload:a})=>({text:void 0})).merge(d.reject,(e,{payload:a})=>({text:void 0})),c=n.reducerWithInitialState({}).case(d.confirmDialog,(e,a)=>a).case(d.confirmCancel,e=>({})).case(d.confirmSubmit,e=>({}));a.c=(e=>e.ui);const m=Object(r.c)({snackbar:u,busy:(e=!1,a)=>!!Object(n.isType)(d.busy)(a)||!Object(n.isType)(d.unbusy)(a)&&e,confirmDialog:c});a.b=m},"./src/styles/SVGLibrary.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/material-ui/SvgIcon/index.js")),r=t.n(o),s=t("../utils/dist/index.js"),i=(t.n(s),this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)a.indexOf(n[o])<0&&(t[n[o]]=e[n[o]])}return t});const l=e=>{var{fill:a,style:t}=e,o=i(e,["fill","style"]);return n.createElement(r.a,Object.assign({style:Object.assign({},t,{fill:a})},o))},d=(...e)=>a=>{var{children:t}=a,o=i(a,["children"]);return Object(s.isFrontend)()?n.createElement(l,Object.assign({},o,{children:Object(s.arrify)(e).concat(t)})):n.createElement("span",null,"here we go")},u=(e,a=e)=>(...t)=>o=>{var{children:r}=o,d=i(o,["children"]);return Object(s.isFrontend)()?n.createElement(l,Object.assign({viewBox:`0 0 ${e} ${a}`,style:{width:`${e}px`,height:`${a}px`},children:Object(s.arrify)(t).concat(r)},d)):n.createElement("span",null,"here we go")},c={Add:d(n.createElement("path",{d:"M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"})),AddUserGroup:d(n.createElement("path",{d:"M18.5,14 C19.88,14 20.99,12.88 20.99,11.5 C20.99,10.12 19.88,9 18.5,9 C17.12,9 16,10.12 16,11.5 C16,12.88 17.12,14 18.5,14 Z M11,13 C12.66,13 13.99,11.66 13.99,10 C13.99,8.34 12.66,7 11,7 C9.34,7 8,8.34 8,10 C8,11.66 9.34,13 11,13 Z M18.5,16 C16.67,16 13,16.92 13,18.75 L13,21 L24,21 L24,18.75 C24,16.92 20.33,16 18.5,16 Z M11,15 C11.66,15 12.5,15.1 13.37,15.28 C11.33,16.41 11,17.9 11,18.75 L11,21 L4,21 L4,18.5 C4,16.17 8.67,15 11,15 Z M6,4 L9,4 L9,6 L6,6 L6,9 L4,9 L4,6 L1,6 L1,4 L4,4 L4,1 L6,1 L6,4 Z"})),Done:d(n.createElement("path",{transform:"translate(4 4)",d:"M6 10.78L3.22 8l-.947.94L6 12.667l8-8-.94-.94z"})),ArrowDown:d(n.createElement("path",{d:"M7 10l5 5 5-5z"})),ArrowUp:d(n.createElement("path",{transform:"rotate(180, 12, 12)",d:"M7 10l5 5 5-5z"})),ArrowLeft:d(n.createElement("path",{transform:"rotate(90, 12, 12)",d:"M7 10l5 5 5-5z"})),ArrowRight:d(n.createElement("path",{transform:"rotate(270, 12, 12)",d:"M7 10l5 5 5-5z"})),Back:d(n.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"})),Buldozer:d(n.createElement("path",{transform:"scale(-1, 1) translate(-24)",d:"M20.25 13.5h-9.5c-.844 0-1.622.284-2.25.757V9.75a.75.75 0 0 0-1.4-.372l-6 10.5A.75.75 0 0 0 1.75 21h3a3.742 3.742 0 0 0 3-1.51 3.742 3.742 0 0 0 3 1.51h9.5A3.754 3.754 0 0 0 24 17.25a3.754 3.754 0 0 0-3.75-3.75zm-9.5 6c-1.24 0-2.25-1.01-2.25-2.25S9.51 15 10.75 15c1.241 0 2.25 1.01 2.25 2.25s-1.009 2.25-2.25 2.25zm9.5 0c-1.24 0-2.25-1.01-2.25-2.25S19.01 15 20.25 15s2.25 1.01 2.25 2.25-1.01 2.25-2.25 2.25zM19.84 3C21.031 3 22 3.955 22 5.128V12a5.062 5.062 0 0 0-2.16-.486h-9.12a5.11 5.11 0 0 0-.72.057v-.057a2.83 2.83 0 0 1 1.44-2.454V7.967c0-.392.323-.71.72-.71.397 0 .72.318.72.71v.709h.638l1.304-5.139A.718.718 0 0 1 15.52 3h4.32z"})),Comments:d(n.createElement("path",{d:"M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"})),Edit:d(n.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"})),Delete:d(n.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"})),Download:d(n.createElement("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})),Drill:d(n.createElement("path",{d:"M17 4.553v2.872l-10 3.64V8.192l10-3.64zm0-2.128L7 6.065V2h10v.425zm0 7.128v2.872l-10 3.64v-2.872l10-3.64zm0 5v3.28L12 22l-4.7-3.916 9.7-3.53z"})),DropdownDown:d(n.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})),DropdownUp:d(n.createElement("path",{transform:"rotate(180, 12, 12)",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})),Fluid:d(n.createElement("path",{d:"M17.34 2.18c-.61-1.43-3.78-.84-6.46.31-1.41.6-2.67 1.35-3.54 2.1 0 0-1.24 1.06-1.24 1.9l-.72 10.43c0 3.4 2.61 5.64 6.62 5.64s6.62-2.1 6.62-5.54l-1.19-14.4c-.01-.23-.09-.44-.09-.44zM7.99 5.35c.8-.69 1.96-1.38 3.28-1.94 1.88-.81 3.34-1.07 4.21-1.07.55 0 .87.1.93.24.15.35-1.08 1.84-4.15 3.15-1.31.56-2.61.93-3.66 1.03-1.01.1-1.43-.1-1.48-.2-.04-.11.11-.55.87-1.21zm-1.35 8.38l.43-6.07c.02.01.05.01.07.01.25.08.56.12.94.12.19 0 .39-.01.62-.03 1.15-.11 2.55-.51 3.96-1.11 1.52-.65 3.01-1.54 3.91-2.45l.77 9.45c-5.61 1.9-9.37.85-10.7.08z"})),Googblue:d(n.createElement("path",{d:"M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5a2 2 0 0 0-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"})),Hamburger:d(n.createElement("path",{d:"M3,18 L21,18 L21,16 L3,16 L3,18 Z M3,13 L21,13 L21,11 L3,11 L3,13 Z M3,6 L3,8 L21,8 L21,6 L3,6 Z"})),Help:d(n.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})),LeftArrow:d(n.createElement("path",{transform:"rotate(180, 12, 12)",d:"M8.6 7.4L10 6l6 6-6 6-1.4-1.4 4.6-4.6z"})),Logo:u(320,100)(n.createElement("path",{d:"M16.82,66.37a15.32,15.32,0,0,0,.81-4.91V56.14L0,63.3l0,.36a40.28,40.28,0,0,0,3,12.74l.25.6L16.77,66.51Zm.81-22.67L4.57,41.89l-.16.31A39.52,39.52,0,0,0,.72,52.75l-.14.69,17.05-2.37Zm54-9.09a40.77,40.77,0,0,0-6.71-6.35L64.56,28l-1.14.9v9.7L72,35.13Zm8.75,18.14A39.52,39.52,0,0,0,76.64,42.2l-.16-.31L63.42,43.7v7.37l17,2.37ZM17.63,28.93,16.49,28l-.31.23a41.24,41.24,0,0,0-6.72,6.35L9,35.13l8.61,3.5Zm40.1,32.53v-50L50.05,6.35V60.26a60.88,60.88,0,0,0,4.48,23L59.9,96.44l.49-.27A40.61,40.61,0,0,0,71.5,87l.26-.31-9.6-12.34A21.07,21.07,0,0,1,57.73,61.46Zm-34.41,0a21.07,21.07,0,0,1-4.43,12.89L9.29,86.69l.26.31a40.46,40.46,0,0,0,11.11,9.17l.49.27,5.37-13.22a60.88,60.88,0,0,0,4.48-23V6.35l-7.68,5.12Zm40.1-5.32v5.32a15.32,15.32,0,0,0,.81,4.91l0,.14L77.75,77l.25-.6a40.28,40.28,0,0,0,3-12.74l0-.36ZM44.37,35V2.56L40.52,0,36.68,2.56V35a527.49,527.49,0,0,1-4,65.1l-.06.47.47.09a41.43,41.43,0,0,0,15,0l.46-.09-.05-.47A527.49,527.49,0,0,1,44.37,35Z"}),n.createElement("path",{d:"M156.68,62.22h5.74v4.45l-.27.17a8.82,8.82,0,0,1-5,1.31,8.3,8.3,0,0,1-8.49-8.66c0-4.86,3.53-8.66,8-8.66a10.44,10.44,0,0,1,6.57,2.22l.38.28,4-4.79-.41-.32a16.48,16.48,0,0,0-10.57-3.4c-8.59,0-15.08,6.25-15.08,14.54S148,73.9,156.83,73.9a19.14,19.14,0,0,0,11.86-4l.19-.16V57.5h-12.2Zm-28.42,11.1h6.92V45.4h-6.92Zm-12.83-10.1a8.63,8.63,0,0,0,5.62-8.39,8.66,8.66,0,0,0-2.4-6.48c-2-2-5-3-9.06-3H96.42v5.8h12.75c3.11,0,5,1.51,5,4s-1.88,4.12-4.92,4.12H96.42V73.32h6.88V64.51h4.44l5.87,8.81h7.87l-6.72-9.81Zm73.06-6.85C184.75,55.52,183,54.91,183,53c0-1.23.92-2.55,3.5-2.55a14.85,14.85,0,0,1,7.61,2.39l.39.25,3.38-4.76-.42-.29a18.07,18.07,0,0,0-10.75-3.09c-6.49,0-10.68,3.42-10.68,8.71s3.7,7.1,10.52,8.66c3.64.84,5.37,1.56,5.37,3.36,0,.81-.38,2.67-3.92,2.67a15.22,15.22,0,0,1-9-3l-.38-.27-3.75,4.48.41.32a20.18,20.18,0,0,0,12.4,4c6.9,0,11.18-3.4,11.18-8.89C198.88,60.33,196.06,58,188.49,56.37ZM319,45.4H296.81v5.68H319ZM303.61,67.65V61.84H319V56.67H296.81V73.32h22.43V67.65Zm-18.89-2.91a8.16,8.16,0,0,1-6.37,3c-4.3,0-7.54-3.6-7.54-8.37S274.05,51,278.35,51a8,8,0,0,1,6.19,2.81l.31.33,5-3.87-.33-.39a13.48,13.48,0,0,0-11.08-5,14.32,14.32,0,0,0-14.75,14.54A14.16,14.16,0,0,0,278.1,73.9c5.06,0,8.67-1.67,11.72-5.42l.34-.42L285,64.41ZM218.53,45.4H206.64V73.32h6.88V65h4.59c7.35,0,11.92-3.79,11.92-9.89S225.73,45.4,218.53,45.4Zm-.59,14.47h-4.42V51h4.38c3.29,0,5.25,1.66,5.25,4.42S221.06,59.87,217.94,59.87ZM242.47,45.2,230.58,73.32h7.18l2.08-5.2h12l2.12,5.2h7.35L249.46,45.2ZM241.74,63l4.16-10.48L250,63Z"})),LogoName:u(120)(),Notification:d(n.createElement("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"})),Materials:d(n.createElement("path",{d:"M9.292 6.437L7.246 1h9.502L14.7 6.437H9.292zm9.004 3.295L17.074 6.48h5.745l-1.221 3.25h-3.302zm-.122-2.485l.648 1.718h2.248l.648-1.718h-3.544zM2.4 9.732L1.181 6.48h5.744L5.703 9.73H2.4zm.527-.767h2.248l.647-1.718H2.28l.648 1.718zM24 13.097v4.729a2.441 2.441 0 0 1-2.431 2.444h-3.227c-.534 1.58-2.006 2.73-3.755 2.73h-5.1c-1.751 0-3.225-1.15-3.759-2.734l-3.298.007A2.441 2.441 0 0 1 0 17.826v-4.728c0-1.631 1.123-2.446 2.43-2.446.046 0 3.156-.051 3.203-.05l.28-.766c.643-1.344 1.993-2.282 3.572-2.282h5.1c1.579 0 2.93.937 3.57 2.282l.285.766c.004.017.013.032.016.05h3.114A2.438 2.438 0 0 1 24 13.097zM5.503 18.991v-7.43c0-.05.013-.097.016-.145h-3.09c-.92 0-1.668.754-1.668 1.68v4.729c0 .926.748 1.679 1.669 1.679h3.124c-.022-.17-.051-.336-.051-.513zm17.736-5.894c0-.926-.75-1.68-1.67-1.68h-3.015c.002.05.016.096.016.145v7.43c0 .176-.03.343-.05.514h3.051c.92 0 1.668-.752 1.668-1.679v-4.73z"})),Message:d(n.createElement("path",{d:"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"})),PersonCopy:d(n.createElement("path",{d:"M12,12 C14.21,12 16,10.21 16,8 C16,5.79 14.21,4 12,4 C9.79,4 8,5.79 8,8 C8,10.21 9.79,12 12,12 Z M12,14 C9.33,14 4,15.34 4,18 L4,20 L20,20 L20,18 C20,15.34 14.67,14 12,14 Z"})),Phone:d(n.createElement("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"})),Photo:d(n.createElement("path",{fill:"#757575",d:"M3 4V1h2v3h3v2H5v3H3V6H0V4h3zm3 6V7h3V4h7l1.83 2H21c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V10h3zm7 9c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-3.2-5c0 1.77 1.43 3.2 3.2 3.2 1.77 0 3.2-1.43 3.2-3.2 0-1.77-1.43-3.2-3.2-3.2-1.77 0-3.2 1.43-3.2 3.2z"})),Print:d(n.createElement("path",{d:"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"})),Reverse:d(n.createElement("path",{transform:"matrix(-1 0 0 1 16.01 4)",d:"M13.65 2.35A7.958 7.958 0 0 0 8 0C3.58 0 .01 3.58.01 8S3.58 16 8 16c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 8 14c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L9 7h7V0l-2.35 2.35z"})),RightArrow:d(n.createElement("path",{d:"M8.6 7.4L10 6l6 6-6 6-1.4-1.4 4.6-4.6z"})),Search:d(n.createElement("path",{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})),ShowLog:d(n.createElement("path",{d:"M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"})),Signature:d(n.createElement("path",{d:"M19.987 8.665c-.091.112-.14.075-.226.01l-2.954-2.224c-.063-.047-.003-.12-.003-.12l2.81-3.444c.746-.915 1.975-1.186 2.927-.47.951.718.97 1.929.224 2.843l-2.778 3.405zm-3.47-1.384l2.544 1.916c.058.044.032.079.005.108-.32.354-2.42 2.678-3.118 3.534-.437.536-1.437.79-2.038.771-.016 0-.046-.006-.07.024-.085.105-.148.168-.197.228-.133.163-.352.129-.482.035-.124-.089-.197-.283-.064-.446.05-.06.099-.133.184-.237.03-.038.01-.062.004-.08-.16-.559-.139-1.544.297-2.077.692-.849 2.528-3.344 2.833-3.76.029-.039.061-.047.103-.016zm5.436 1.526a.41.41 0 0 1-.561.065.374.374 0 0 1-.068-.538l1.942-2.38a.41.41 0 0 1 .56-.066c.175.13.205.372.069.539l-1.942 2.38zM14 9.671c0 .181-.139.329-.308.329H3.308C3.138 10 3 9.852 3 9.671V9.33C3 9.148 3.138 9 3.308 9h10.384c.17 0 .308.148.308.329v.342zm-1 5.979c0 .192-.12.35-.265.35h-3.47C9.119 16 9 15.842 9 15.65v-.3c0-.192.12-.35.265-.35h3.47c.146 0 .265.158.265.35v.3zm1-8.979c0 .181-.139.329-.308.329H3.308C3.138 7 3 6.852 3 6.671V6.33C3 6.148 3.138 6 3.308 6h10.384c.17 0 .308.148.308.329v.342zm.929 8.979c0-.327.144-.362.221-.386.194-.06.406-.14.619-.249.077-.039.231-.082.231.194v4.735c0 .581-.455 1.056-1.012 1.056H2.012C1.455 21 1 20.525 1 19.944V3.056C1 2.475 1.455 2 2.012 2h12.976C15.545 2 16 2.475 16 3.056v3.27a.647.647 0 0 1-.189.482c-.137.153-.478.56-.659.807-.07.096-.223.257-.223-.066V4.173c0-.58-.456-1.055-1.012-1.055H3.083c-.556 0-1.012.475-1.012 1.055v14.654c0 .58.456 1.055 1.012 1.055h10.834c.556 0 1.012-.475 1.012-1.055V15.65z"})),ThreeDots:d(n.createElement("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})),Time:d(n.createElement("path",{d:"M0 0h24v24H0z"}),n.createElement("path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"})),User:d(n.createElement("path",{fill:"#757575",fillRule:"nonzero",d:"M13 5h9v2h-9V5zm0 4h9v2h-9V9zm0 4h9v2h-9v-2zm-5.5 0c1.38 0 2.49-1.12 2.49-2.5S8.88 8 7.5 8a2.51 2.51 0 0 0-2.51 2.5c0 1.38 1.13 2.5 2.51 2.5zm0 2c-1.83 0-5.5.92-5.5 2.75V20h11v-2.25C13 15.92 9.33 15 7.5 15z"})),UserEdit:u(120)(n.createElement("path",{transform:"translate(-15 -20)",d:"M55 60c11.05 0 20-8.95 20-20s-8.95-20-20-20-20 8.95-20 20 8.95 20 20 20zm0 10c-13.35 0-40 6.7-40 20v10h53.8c-2.4-3.6-3.8-7.9-3.8-12.5 0-5.9 2.3-11.3 6.05-15.3C65.2 70.75 59.4 70 55 70z"}),n.createElement("path",{transform:"translate(55 40)",d:"M45.337 30.287c.093-.747.163-1.494.163-2.287 0-.793-.07-1.54-.163-2.287l4.923-3.85c.443-.35.56-.98.28-1.493l-4.667-8.073c-.28-.514-.91-.7-1.423-.514l-5.81 2.334a17.048 17.048 0 0 0-3.943-2.287l-.887-6.183c-.07-.56-.56-.98-1.143-.98h-9.334c-.583 0-1.073.42-1.143.98l-.887 6.183c-1.423.583-2.73 1.377-3.943 2.287l-5.81-2.334c-.537-.21-1.143 0-1.423.514L5.46 20.37a1.15 1.15 0 0 0 .28 1.493l4.923 3.85A18.505 18.505 0 0 0 10.5 28c0 .77.07 1.54.163 2.287l-4.923 3.85c-.443.35-.56.98-.28 1.493l4.667 8.073c.28.514.91.7 1.423.514l5.81-2.334a17.048 17.048 0 0 0 3.943 2.287l.887 6.183c.07.56.56.98 1.143.98h9.334c.583 0 1.073-.42 1.143-.98l.887-6.183c1.423-.583 2.73-1.377 3.943-2.287l5.81 2.334c.537.21 1.143 0 1.423-.514l4.667-8.073c.28-.513.163-1.143-.28-1.493l-4.923-3.85zM28 36.167c-4.503 0-8.167-3.664-8.167-8.167s3.664-8.167 8.167-8.167 8.167 3.664 8.167 8.167-3.664 8.167-8.167 8.167z"})),UserGroups:d(n.createElement("path",{d:"M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7a2.5 2.5 0 0 0 0 5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"})),Well:d(n.createElement("path",{d:"M12.081 4c-.12-.68-.107-1.24.039-1.681.24-.726.805-1.601 2.23-1.231 1.205.313.888 2.398-.362 2.272-.861-.087-1.45.127-1.764.64H13v1h-2V4h1.081zm-4 8.196l-1.432 5.372 10-2.636-.105-.393-8.463-2.343zm.422-1.583l7.551 2.09L15.067 9H8.933l-.43 1.613zm-2.317 8.691L6 20H4L6.933 9H6V7h1.467L8 5h8l.533 2H18v2h-.933L20 20h-2l-.95-3.56-10.864 2.864zM9.466 7h5.067l-.266-1H9.733l-.266 1zM2 21h20v2H2v-2zm9.247-17.758c-.206-.487-.645-.684-1.315-.593-1.004.137-1.354-1.36-.255-1.6 1.023-.223 1.402.356 1.57.867.113.34.113.783 0 1.326z"})),WellConstruction:d(n.createElement("path",{d:"M2 2h20v2H2V2zm6 3h2v8.066a1 1 0 0 1-1 1H6v-2h2V5zm4 0h2v12.066a1 1 0 0 1-1 1h-3v-2h2V5zm4 0h2v16.066a1 1 0 0 1-1 1h-3v-2h2V5z"})),WellGroup:u(96)(n.createElement("path",{fill:"#BDBDBD",d:"M47 16h8L39 76h-8z"}),n.createElement("path",{fill:"#BDBDBD",d:"M51 16h24v4H51zM59 12h8v4h-8zM87 16h8L79 76h-8z"}),n.createElement("path",{fill:"#BDBDBD",d:"M39 24h48v8H39zM34.678 53.87l53.055 14.448v6.472L34.678 60.343zM45.606 37.87l39.199 10.157v6.77L45.606 44.642zM63.48 12.81c-.64-3.088-.64-5.6 0-7.536.958-2.903 3.219-6.404 8.92-4.923 4.822 1.253 3.551 9.592-1.448 9.089-3.867-.39-6.358.734-7.473 3.37zM59.99 8.97c-.826-1.948-2.58-2.74-5.262-2.374-4.016.548-5.415-5.439-1.019-6.399 4.09-.893 5.606 1.422 6.28 3.467.45 1.362.45 3.131 0 5.306z"}),n.createElement("path",{fill:"#F5F5F6",d:"M15.956 16.443l37.31-8.64-7.905 14.286h10.287l2.304 7.833h5.75l.218 7.69h-4.232l11.969 44.297H5.76L6.1 86h66.448L80 93H4z"}),n.createElement("path",{fill:"#BDBDBD",d:"M40.324 18c-.479-2.72-.427-4.962.155-6.726.959-2.903 3.22-6.404 8.92-4.923 4.823 1.253 3.552 9.592-1.447 9.089-3.444-.347-5.797.507-7.058 2.56H44v4h-8v-4h4.324zm-16 32.784l-5.73 21.486 40-10.543-.42-1.572-33.85-9.37zm1.69-6.333l30.203 8.361L52.267 38H27.733l-1.72 6.45zm-9.272 34.766L16 82H8l11.733-44H16v-8h5.867L24 22h32l2.133 8H64v8h-3.733L72 82h-8l-3.797-14.239-43.46 11.456zM29.867 30h20.266l-1.066-4H30.933l-1.066 4zM0 86h80v8H0v-8zm36.99-71.03c-.826-1.948-2.58-2.74-5.262-2.374-4.016.548-5.415-5.439-1.019-6.399 4.09-.893 5.606 1.422 6.28 3.467.45 1.362.45 3.131 0 5.306z"})),WellMaster:d(n.createElement("path",{d:"M8.67 9c0 1.654 1.676 3 3.33 3 1.654 0 3.385-1.346 3.385-3 0 0-1.84.28-3.385.28-1.544 0-3.33-.28-3.33-.28zm1.584-2.959h-.003L10 2h4l-.254 4.041h-.006.578l1.186-2.608A4.985 4.985 0 0 1 17 7c0 .038.742 0 1.004.02.146.065.083 1.374 0 1.544-.056.114-.39.203-1.004.267C17 11.588 14.757 14 12 14s-5-2.412-5-5.169c-.532-.065-.856-.154-.972-.267-.173-.17-.114-1.543 0-1.543H7V7c0-1.394.57-2.656 1.492-3.562L9.676 6.04h.578zM12 18.94l-3.433-3.433C9.587 15.182 10.74 15 12 15s2.412.182 3.433.507L12 18.94zm-4.92-2.799l3.92 3.92V23H4v-2c0-2.094 1.16-3.807 3.08-4.86zm9.84 0c1.92 1.053 3.08 2.766 3.08 4.86v2h-7v-2.94l3.92-3.92z"})),Work:d(n.createElement("path",{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"})),Visible:d(n.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"})),Invisible:d(n.createElement("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46A11.804 11.804 0 0 0 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"})),DeleteCross:d(n.createElement("path",{d:"M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4 10.868L14.868 16 12 13.132 9.132 16 8 14.868 10.868 12 8 9.132 9.132 8 12 10.868 14.868 8 16 9.132 13.132 12 16 14.868z"})),AddButton:d(n.createElement("path",{fill:"white",d:"M0 0h24v24H0z"}),n.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"})),Sort:d(n.createElement("path",{d:"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"})),Settings:d(n.createElement("path",{d:"M19.43,12.98 C19.47,12.66 19.5,12.34 19.5,12 C19.5,11.66 19.47,11.34 19.43,11.02 L21.54,9.37 C21.73,9.22 21.78,8.95 21.66,8.73 L19.66,5.27 C19.54,5.05 19.27,4.97 19.05,5.05 L16.56,6.05 C16.04,5.65 15.48,5.32 14.87,5.07 L14.49,2.42 C14.46,2.18 14.25,2 14,2 L10,2 C9.75,2 9.54,2.18 9.51,2.42 L9.13,5.07 C8.52,5.32 7.96,5.66 7.44,6.05 L4.95,5.05 C4.72,4.96 4.46,5.05 4.34,5.27 L2.34,8.73 C2.21,8.95 2.27,9.22 2.46,9.37 L4.57,11.02 C4.53,11.34 4.5,11.67 4.5,12 C4.5,12.33 4.53,12.66 4.57,12.98 L2.46,14.63 C2.27,14.78 2.22,15.05 2.34,15.27 L4.34,18.73 C4.46,18.95 4.73,19.03 4.95,18.95 L7.44,17.95 C7.96,18.35 8.52,18.68 9.13,18.93 L9.51,21.58 C9.54,21.82 9.75,22 10,22 L14,22 C14.25,22 14.46,21.82 14.49,21.58 L14.87,18.93 C15.48,18.68 16.04,18.34 16.56,17.95 L19.05,18.95 C19.28,19.04 19.54,18.95 19.66,18.73 L21.66,15.27 C21.78,15.05 21.73,14.78 21.54,14.63 L19.43,12.98 L19.43,12.98 Z M12,15.5 C10.07,15.5 8.5,13.93 8.5,12 C8.5,10.07 10.07,8.5 12,8.5 C13.93,8.5 15.5,10.07 15.5,12 C15.5,13.93 13.93,15.5 12,15.5 Z"})),Reports:d(n.createElement("path",{d:"M19,3 L14.82,3 C14.4,1.84 13.3,1 12,1 C10.7,1 9.6,1.84 9.18,3 L5,3 C3.9,3 3,3.9 3,5 L3,19 C3,20.1 3.9,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,5 C21,3.9 20.1,3 19,3 Z M12,3 C12.55,3 13,3.45 13,4 C13,4.55 12.55,5 12,5 C11.45,5 11,4.55 11,4 C11,3.45 11.45,3 12,3 Z M14,17 L7,17 L7,15 L14,15 L14,17 Z M17,13 L7,13 L7,11 L17,11 L17,13 Z M17,9 L7,9 L7,7 L17,7 L17,9 Z"})),Dots:d(n.createElement("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})),CloseCross:d(n.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),RoleCheck:d(n.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})),Calendar:d(n.createElement("path",{d:"M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"}))};a.a=c,a.b=c},"./src/styles/Typography.tsx":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t("./src/styles/font.ts"),o=t("./src/styles/restyle.ts"),r=t("./src/layout/Div.tsx"),s=t("./src/layout/H1.tsx");const i=n.display4()(s.a);a.Display4=i;const l=n.display3()(s.a);a.Display3=l;const d=n.display2()(s.a);a.Display2=d;const u=n.display1()(s.a);a.Display1=u;const c=n.headLine()(r.a);a.HeadLine=c;const m=n.title()(r.a);a.Title=m;const p=n.subheading()(r.a);a.Subheading=p;const f=n.body2()(r.a);a.Body2=f;const h=n.body1(o["a"]`text-align: right;`)(r.a);a.Body1=h;const _=n.caption(o["a"]`text-align: center;`)(r.a);a.Caption=_;const b=n.caption2()(r.a);a.Caption2=b},"./src/styles/colors.ts":function(e,a,t){"use strict";var n=t("./node_modules/material-ui/colors/blue.js"),o=t.n(n);const r="rgba(0, 0, 0, 0.87)";a.c=r;const s="rgba(0, 0, 0, 0.54)";a.j=s;const i="rgba(0, 0, 0, 0.38)";a.d=i;a.h="#e5F4ef";a.f="#50af54";const l="rgba(227, 227, 227, 0.8)";a.e=l;a.g="#fbfbfb";a.l="#ffffff";a.k="transparent";a.b="#0094cc";a.i="#40c4ff";a.a="#31a6da";a.m={AVATAR_GRAY:"#e1e2e1",SIMPLE_BLACK:"#000000",DEFAULT_BLACK:r,DARK_BLACK:"rgba(33,33,33,0.87)",SOFT_BLACK:s,EXTRA_SOFT_BLACK:i,SELECTED_GRAY:"#f3f3f3",SELECTED_REPORT_LINK_GRAY:"#e4e4e4",LIGHT_GREY_BLUE:"#f5f5f6",LIGHT_BORDER_GRAY:"rgba(0, 0, 0, 0.075)",DARK_BORDER_GRAY:"e0e0e0",UNDERLINE_GRAY:"rgba(0, 0, 0, 0.42)",DARK_GRAY:"#bdbdbd",HEAVY_LIGHT_LIGHT_GRAY:"#f1f1f1",HEAVY_LIGHT_GRAY:"#f0f0f0",BLACK_GRAY:"#b7b7b7",DISABLED_GRAY:"rgba(0, 0, 0, 0.22)",MEDIUM_GRAY:"#f7f7f7",BORDER_GRAY:"rgba(0,0,0,0.12)",DARK_GREEN:"#00c853",LIGHT_GREEN:"#e5F4ef",REPORT_GREEN:"#2ed053",BRIGHT_GREEN:"#5efc82",GREEN:"#50af54",GRAY:l,LOGO_BLUE:"#54bfee",GREY_BLUE:"#62727b",DARK_BLUE:"rgba(245,245,246,0.5)",LIGHT_GRAY:"#fbfbfb",ACCENT_BLUE:"#31a6da",DEFAULT_WHITE:"rgba(255, 255, 255, 0.54)",PURPLE_WHITE:"#faf9fc",HEAVY_WHITE:"rgba(255, 255, 255, 0.87)",WHITE:"#ffffff",TRANSPARENT:"transparent",DEEP_BLUE:"#0094cc",PRIMARY:"#40c4ff",SELECTED_BLUE:"#102027",EXTRA_SOFT_BLUE:"rgba(0, 148, 204, 0.05)",LIGHT_RED:"#ff1744",BRIGHT_RED:"#de5248",EXTRA_LIGHT_RED:"rgba(244, 67, 54, 0.87)",ACCENT_RED:"#f36258",PALE_VIOLET_RED:"#db7093",DARK_RED:"#f44336"};const d=Object.assign({},o.a,{A400:"#40c4ff",A700:"#40c4ff"});a.n=d},"./src/styles/css.ts":function(e,a,t){"use strict";a.a={defaultTransition:(...e)=>e.map(e=>`${e} .25s ease-in-out`).join(", ")}},"./src/styles/font.ts":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t("./node_modules/ramda/index.js"),o=(t.n(n),t("./src/styles/restyle.ts")),r=t("./src/styles/colors.ts");const s=o["a"]`font-family: "Roboto", "Helvetica", "Arial", sans-serif;`;a.FontFamily=s;const i=(...e)=>(a=o["a"]``)=>Object(n.compose)(a,...e,s),l=e=>o["a"]`font-size: ${e}px;`;a.FontSize=l;const d=e=>o["a"]`font-weight: ${e};`;a.FontWeight=d;const u=e=>o["a"]`line-height: ${e};`;a.LineHeight=u;const c=e=>o["a"]`color: ${e};`;a.Color=c;const m=(...e)=>o["a"]`margin:${e.reduce((e,a)=>`${e} ${a?`${a}px`:a}`,"")};`;a.Margin=m;const p=l(12);a.F12=p;const f=l(14);a.F14=f;const h=l(16);a.F16=h;const _=l(21);a.F21=_;const b=l(24);a.F24=b;const v=l(34);a.F34=v;const y=l(45);a.F45=y;const g=l(56);a.F56=g;const k=l(112);a.F112=k;const j=d(300);a.FW300=j;const x=d(400);a.FW400=x;const w=d(500);a.FW500=w;const M=u(1);a.LH1=M;const S=u(1.07);a.LH1_07=S;const L=u(1.35);a.LH1_35=L;const z=u(1.18);a.LH1_18=z;const T=u(1.5);a.LH1_5=T;const E=u(1.71);a.LH1_71=E;const D=u(1.43);a.LH1_43=D;const P=u(1.33);a.LH1_33=P;const O=m(0);a.MB0=O;const A=c(r.c);a.DefaultBlack=A;const C=c(r.j);a.SoftBlack=C;const N=c(r.d);a.ExtrasoftBlack=N;const R=i(k,j,C,M);a.display4=R;const B=i(g,x,C,L);a.display3=B;const H=i(y,x,C,S);a.display2=H;const Y=i(v,x,C,z);a.display1=Y;const I=i(b,x,A,P,O);a.headLine=I;const K=i(_,w,A,M);a.title=K;const F=i(h,x,A,T);a.subheading=F;const V=i(h,w,u(1.1875));a.subheadingBold=V;const W=i(f,w,A,E);a.body2=W;const U=i(f,x,A,D);a.body1=U;const G=i(p,x,C,M);a.caption=G;const J=i(f,x,C,S);a.caption2=J;const q=i(f,w,C,D);a.button=q},"./src/styles/index.ts":function(e,a,t){"use strict";var n=t("./src/styles/colors.ts");t.d(a,"e",function(){return n.m});var o=t("./src/styles/SVGLibrary.tsx");t.d(a,"c",function(){return o.b});var r=t("./src/styles/restyle.ts");t.d(a,"f",function(){return r.a});var s=t("./src/styles/font.ts"),i=t("./src/styles/Typography.tsx");t.d(a,"b",function(){return s}),t.d(a,"d",function(){return i});var l=t("./src/styles/css.ts");t.d(a,"a",function(){return l.a})},"./src/styles/restyle.ts":function(e,a,t){"use strict";var n=t("./node_modules/styled-components/dist/styled-components.es.js");a.a=((e,...a)=>t=>Object(n.a)(t)(e,...a))},"./src/wizard/StepLine.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./src/layout/Div.tsx")),r=t("./node_modules/ramda/index.js"),s=(t.n(r),t("./node_modules/styled-components/dist/styled-components.es.js")),i=t("./src/styles/index.ts");const l=Object(r.omit)(["currentStep","steps"]),d=Object(s["a"])(o["a"])`
    position: relative;
    display: flex;
    margin-right: 60px;

    &:not(:last-child):after {
        position: absolute;
        top: 18px;
        right: -59px;
        height: 1px;
        width: 51px;
        opacity: 0.38;
        background-color: #BDBDBD;
        content: '';
    }
`,u=Object(s["a"])(o["a"])`
    height: 16px;
    color: ${e=>e.passed||e.current?i.e.DEFAULT_BLACK:i.e.SOFT_BLACK};
    white-space: nowrap;
    overflow: hidden;
    max-width: calc(25% - 94px);
    text-overflow: ellipsis;
    font-family: Roboto;
    font-size: 14px;
    font-weight: ${({current:e})=>e?500:400};
    line-height: 16px;
`,c=Object(s["a"])(o["a"])`
    height: 14px;
    color: ${i.e.SOFT_BLACK};
    font-family: Roboto;
    font-size: 12px;
    line-height: 14px;
`,m=Object(s["a"])(o["a"])`
    margin: 4px 7px 3px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height:24px;
    border-radius:50%;
    color: ${i.e.WHITE};
    font-family: Roboto;
    font-size: 12px;
    font-weight: 500;
    height: 24px;
    width: 24px;
    background-color: ${e=>e.passed||e.current?i.e.PRIMARY:i.e.EXTRA_SOFT_BLACK};
`,p=e=>n.createElement(d,null,n.createElement(m,{current:e.current,passed:e.passed},e.passed?n.createElement(i.c.Done,null):e.index+1),n.createElement("div",null,(e=>e.label&&n.createElement(u,{title:e.label,passed:e.passed,current:e.current},e.label))(e),e.description&&n.createElement(c,null,e.description))),f=e=>n.createElement("div",Object.assign({},l(e)),Object(r.addIndex)(r.map)((e=>(a,t)=>n.createElement(p,{label:a.label,key:"step"+t,description:a.description,current:t===e,index:t,passed:e>t}))(e.currentStep))(e.steps));a.a=Object(s["a"])(f)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 72px;
    width: 100%;
    background-color: ${i.e.WHITE};
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.14), 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
`},"./src/wizard/Wizard.tsx":function(e,a,t){"use strict";var n=t("./node_modules/react/index.js"),o=(t.n(n),t("./node_modules/recompose/es/Recompose.js")),r=t("./src/controls/Button.tsx"),s=t("./src/layout/Box.tsx"),i=t("./src/wizard/StepLine.tsx"),l=t("./node_modules/ramda/index.js"),d=(t.n(l),t("./src/store/configureStore.tsx")),u=t("./node_modules/react-router-redux/es/index.js"),c=t("./node_modules/material-ui/styles/index.js"),m=(t.n(c),t("./src/styles/colors.ts")),p=t("./src/layout/PageDiv.ts");const f={color:m.j,flex:"none"},h=Object(o.b)({children:"ВЕРНУТЬСЯ",onClick:null})(r.a),_=Object(c.withStyles)({root:Object.assign({},f,{marginLeft:-16})})(h),b=Object(o.b)({children:"ОТМЕНА",onClick:null})(r.a),v=Object(c.withStyles)({root:f})(b),y=Object(o.b)({children:"ДАЛЕЕ",primary:!0,disabled:!1,onClick:null})(r.a),g=e=>n.createElement(s.a,{style:{width:"100%",paddingTop:"24px"},gap:8},!e.isFirstStep&&n.createElement(_,{onClick:e.onPrev}),n.createElement(s.a,{stretch:!0}),n.createElement(v,{onClick:e.onCancel}),n.createElement(y,{onClick:e.onNext,disabled:e.nextDisabled},e.isLastStep?e.lastStepLabel||"СОЗДАТЬ":"ДАЛЕЕ"));class k extends n.Component{constructor(e){super(e),this.onCancel=(()=>this.props.onExit()),this.onNext=(()=>this.state.currentStep===this.props.steps.length-1?this.props.onComplete(this.state.model):this.setState({currentStep:this.state.currentStep+1})),this.onValid=(e=>this.setState({model:Object(l.mergeDeepRight)(this.state.model,e),isNextDisabled:!1})),this.onInvalid=(e=>{this.setState({isNextDisabled:!0,model:Object(l.mergeDeepRight)(this.state.model,e)})}),this.renderStepLine=(()=>!this.props.disableStepLine&&n.createElement(i.a,{currentStep:this.state.currentStep,steps:this.props.steps})),this.state={model:e.model||{},currentStep:0,isNextDisabled:!1}}render(){const e=this.props.steps[this.state.currentStep].component;return n.createElement(p.b,null,n.createElement(s.b,null,this.renderStepLine(),n.createElement("div",{style:{margin:"auto",paddingTop:"24px"}},n.createElement(e,{model:this.state.model,onValid:this.onValid,onInvalid:this.onInvalid,onlyTouchedErrors:!0}),n.createElement(g,{onCancel:this.onCancel,onNext:this.onNext,onPrev:()=>this.setState({currentStep:this.state.currentStep-1}),nextDisabled:this.state.isNextDisabled,isLastStep:this.state.currentStep===this.props.steps.length-1,isFirstStep:0===this.state.currentStep}))))}}a.a=k,k.defaultProps={onExit:()=>Object(d.e)().dispatch(Object(u.b)())}},0:function(e,a,t){e.exports=t("./src/app/indexDev.tsx")},1:function(e,a){},2:function(e,a){},3:function(e,a){}});
//# sourceMappingURL=front.js.map