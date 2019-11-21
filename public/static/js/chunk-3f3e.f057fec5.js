(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3f3e"],{"/umX":function(e,t,s){"use strict";t.__esModule=!0;var a=function(e){return e&&e.__esModule?e:{default:e}}(s("9dlP"));t.default=function(e,t,s){return t in e?(0,a.default)(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}},"5VVw":function(e,t,s){"use strict";var a={name:"APIActionTips",data:function(){return{activeName:""}}},n=(s("cU9i"),s("ZrdR")),i=Object(n.a)(a,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-form",[s("el-form-item",[s("el-button",{attrs:{type:"warning",size:"small"}},[e._v("Actions Tips")]),e._v(" "),s("el-collapse",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[s("el-collapse-item",{attrs:{title:"Action: RequestMethod",name:"1"}},[s("div",[e._v("1. Get or Post")]),e._v(" "),s("div",[e._v("2. Get a request from server")]),e._v(" "),s("div",[e._v("3. Post a request from server")]),e._v(" "),s("div",[e._v("4. Please build your request before you use this action")]),e._v(" "),s("div",[e._v("5. This action should be used at the end")]),e._v(" "),s("div",[e._v("6. I want to use request method {requestMethod}")]),e._v(" "),s("div",[e._v("7. [Action: Get or Post] [comment]")])]),e._v(" "),s("el-collapse-item",{attrs:{title:"Action: Header",name:"3"}},[s("div",[e._v("1. Set header only by {headerKey} and {headerValue}")]),e._v(" "),s("div",[e._v("2. Set header from data sheet with {dataName}")]),e._v(" "),s("div",[e._v("3. [Action: Header] [ActionType: SetHeader or SetHeaderFromDB] [Input: key:value or keyName] [comment]")]),e._v(" "),s("div",[e._v("4. If you want to set multiple headers. Please use set header from data sheet")]),e._v(" "),s("div",[e._v("5. If you use set header only. You can put them in the header key and header value directly or put in the headerKey and headerVale from data sheet")]),e._v(" "),s("div",[e._v("6. Data sheet mean data in API Data page for specific case")])]),e._v(" "),s("el-collapse-item",{attrs:{title:"Action: Query",name:"4"}},[s("div",[e._v("1. Set query only by {queryKey} and {queryValue}")]),e._v(" "),s("div",[e._v("2. Set query from data sheet with {dataName}")]),e._v(" "),s("div",[e._v("3. [Action: Query] [ActionType: SetQuery or SetQueryFromDB] [Input: key:value or keyName] [comment]")]),e._v(" "),s("div",[e._v("4. If you want to set multiple queries. Please use set query from data sheet")]),e._v(" "),s("div",[e._v("5. If you use set query only. You can put them in the query key and query value directly or put them in the queryKey and queryValue from data sheet")]),e._v(" "),s("div",[e._v("6. Data sheet mean data in API Data page for specific case")])]),e._v(" "),s("el-collapse-item",{attrs:{title:"Action: Body",name:"5"}},[s("div",[e._v("1. Set {bodyType} body from data sheet - {dataName}")]),e._v(" "),s("div",[e._v("2. [Action: Body] [ActionType: Json or Form or Text] [Input: keyName] [comment]")]),e._v(" "),s("div",[e._v("3. We can set Json body")]),e._v(" "),s("div",[e._v("4. We can set Text body")]),e._v(" "),s("div",[e._v("5. We can set Form body")]),e._v(" "),s("div",[e._v("6. You can only put the body in data sheet")]),e._v(" "),s("div",[e._v("7. Data sheet mean data in API Data page for specific case")])]),e._v(" "),s("el-collapse-item",{attrs:{title:"Action: Path",name:"6"}},[s("div",[e._v("1. Add router path {path} into the url")]),e._v(" "),s("div",[e._v("2. [Action: Path] [Input: value or keyName] [comment]")]),e._v(" "),s("div",[e._v("3. You can put the path directly into the step or data sheet")]),e._v(" "),s("div",[e._v("4. Data sheet mean data in API Data page for specific case")])]),e._v(" "),s("el-collapse-item",{attrs:{title:"Action: See",name:"7"}},[s("div",[e._v("1. To verify if response status code, response body json value or response text is existing")]),e._v(" "),s("div",[e._v("2. Before to verify the response body. You have to know what the body type it is after response")]),e._v(" "),s("div",[e._v("3. If you want to verify the json value. You have to learn the jsonPath expression")]),e._v(" "),s("div",[e._v("4. JsonPath expression: https://github.com/json-path/JsonPath")]),e._v(" "),s("div",[e._v("5. See reponse status code is {code}")]),e._v(" "),s("div",[e._v("6. See response jsonValue {jsonValue} by jsonPath {jsonPath}")]),e._v(" "),s("div",[e._v("7. See response text {text}")]),e._v(" "),s("div",[e._v("8. [Action: JsonPath or Text or Code] [ActionType: See] [Input: value or keyName] [comment]")])]),e._v(" "),s("el-collapse-item",{attrs:{title:"Action: NotSee",name:"8"}},[s("div",[e._v("1. To verify if response status code, response body json value or response text is not existing")]),e._v(" "),s("div",[e._v("2. Before to verify the response body. You have to know what the body type it is after response")]),e._v(" "),s("div",[e._v("3. If you want to verify the json value. You have to learn the jsonPath expression")]),e._v(" "),s("div",[e._v("4. JsonPath expression: https://github.com/json-path/JsonPath")]),e._v(" "),s("div",[e._v("5. NotSee reponse status code is {code}")]),e._v(" "),s("div",[e._v("6. NotSee response jsonValue {jsonValue} by jsonPath {jsonPath}")]),e._v(" "),s("div",[e._v("7. NotSee response text {text}")]),e._v(" "),s("div",[e._v("8. [Action: JsonPath or Text or Code] [ActionType: NotSee] [Input: value or keyName] [comment]")])]),e._v(" "),s("el-collapse-item",{attrs:{title:"Action: SaveValue",name:"9"}},[s("div",[e._v("1. Save value from response body use jsonPath as name {storeName}")]),e._v(" "),s("div",[e._v("2. [Action: SaveValue] [ActionType: SaveFromJson] [Input: storeName] [comment]")]),e._v(" "),s("div",[e._v("3. You can save the value from current response json body")]),e._v(" "),s("div",[e._v("4. And use it for next request: header, body, query, path")])]),e._v(" "),s("el-collapse-item",{attrs:{title:"Action: NewRequest",name:"10"}},[s("div",[e._v("1. Open a new request with host {host}")]),e._v(" "),s("div",[e._v("2. [Action: NewRequest] [Input: hostValue or keyName] [comment]")]),e._v(" "),s("div",[e._v("3. You can put the host value in the step or datasheet")]),e._v(" "),s("div",[e._v("4. This action is used for the case need open multiple request to verify")]),e._v(" "),s("div",[e._v("5. Please use save value action and then new request")])])],1)],1)],1)},[],!1,null,null,null);i.options.__file="ActionTips.vue";t.a=i.exports},"9dlP":function(e,t,s){e.exports={default:s("dixQ"),__esModule:!0}},Ia9Q:function(e,t,s){"use strict";s.r(t);var a=s("omC7"),n=s.n(a),i=s("rerW"),r=s.n(i),o=s("t3Un");function l(e){var t={suiteName:e};return Object(o.a)({url:"/apitestcase/getAPICasesBySuiteName",method:"post",data:t})}var u=s("kUvm"),c={name:"APISearchCase",data:function(){return{loading:!1,suiteName:"",currentPage:1,pageSize:20,featureAuto:"",featureMap:[],tempTestCases:[]}},computed:{origApiTestCase:function(){return this.$store.getters.origApiTestCase}},methods:{handleSizeChange:function(e){this.currentPage=1,this.pageSize=e},handleCurrentChange:function(e){this.currentPage=e},onSearch:function(){var e=this,t=this.suiteName;t?l(t).then(function(t){var s=t.data.status,a=t.data.message;if("success"===s){var i=JSON.parse(n()(a)),r=JSON.parse(n()(a));e.tempTestCases=i,e.$store.dispatch("setOrigCases",r);var o=i.map(function(e){return{value:e.featureName}});e.featureMap=o}else e.$message({message:a,type:"error"})}):this.$message({message:"Please input suiteName",type:"error"})},onClear:function(){this.suiteName="",this.tempTestCases=[],this.$store.dispatch("setOrigCases",[]),this.currentPage=1,this.total=0,this.pageSize=20,this.featureAuto="",this.featureMap=[]},queryFeatureFilter:function(e,t){var s=this.featureMap,a=e?s.filter(this.createFilter(e)):s,n=[],i=function(e){if(n.find(function(t){return t.value===e.value}))return"continue";n.push(e)},o=!0,l=!1,u=void 0;try{for(var c,d=r()(a);!(o=(c=d.next()).done);o=!0)i(c.value)}catch(e){l=!0,u=e}finally{try{!o&&d.return&&d.return()}finally{if(l)throw u}}t(n)},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},onFilter:function(){var e={};this.featureAuto&&(e.featureName=[{type:"featureName",value:this.featureAuto}]);var t=JSON.parse(n()(this.origApiTestCase)),s=Object(u.a)(t,e);0===s.length?(this.tempTestCases=[],this.$message({message:"No data found",type:"warning"})):this.tempTestCases=s},onClearFilter:function(){this.featureAuto="",this.tempTestCases=JSON.parse(n()(this.origApiTestCase))},onView:function(e,t){var s=JSON.parse(n()(e));this.$emit("viewDetails",s)},onEdit:function(e,t){e.edit=!e.edit},onSave:function(e,t){1!==this.currentPage&&(t=this.pageSize+t)},onCancel:function(e,t){e.edit=!e.edit},onDelete:function(e,t){var s=this,a=e.suiteName,n=e.testName;1!==this.currentPage&&(t=this.pageSize+t),this.$msgbox({title:"Delete Test Case",message:"Are you sure to delete the test case: "+n,showCancelButton:!0,confirmButtonText:"Confirm",cancelButtonText:"Cancel"}).then(function(){s.loading=!0,function(e,t){var s={suiteName:e,testName:t};return Object(o.a)({url:"/apitestcase/deleteAPITestCase",method:"post",data:s})}(a,n).then(function(e){var a=e.data.status,i=e.data.message;"success"===a?(s.loading=!1,s.tempTestCases.splice(t,1),s.origApiTestCase.splice(t,1),0===s.origApiTestCase.length?(s.$emit("refreshTable"),s.suiteName=""):s.$emit("refreshTable"),s.$emit("viewDetails",""),s.$message({message:n+" was deleted",type:"success"})):(s.loading=!1,s.$message({message:i,type:"error"}))})}).catch(function(){s.loading=!1,s.$message({message:"Cancel delete test case: "+n,type:"info"})})},updateSearchTable:function(e){var t=this;this.suiteName=e,l(e).then(function(e){var s=e.data.status,a=e.data.message;if("success"===s){var i=JSON.parse(n()(a)),r=JSON.parse(n()(a));t.tempTestCases=i,t.$store.dispatch("setOrigCases",r);var o=i.map(function(e){return{value:e.featureName}});t.featureMap=o}else t.$message({message:a,type:"error"})})}}},d=(s("wwKv"),s("ZrdR")),m=Object(d.a)(c,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"searchCase"},[s("el-form",{attrs:{inline:!0,"label-position":"left"},nativeOn:{submit:function(e){e.preventDefault()}}},[s("el-form-item",{attrs:{label:"Test Suite"}},[s("el-input",{attrs:{placeholder:"Input suite name"},model:{value:e.suiteName,callback:function(t){e.suiteName=t},expression:"suiteName"}})],1),e._v(" "),s("el-form-item",[s("el-button",{staticStyle:{background:"hsl(214, 37%, 28%)",color:"#fff"},attrs:{type:"info",size:"small",icon:"el-icon-search"},on:{click:e.onSearch}},[e._v("Search")]),e._v(" "),s("el-button",{attrs:{type:"info",size:"small",icon:"el-icon-refresh"},on:{click:e.onClear}},[e._v("Clear")])],1),e._v(" "),s("el-form-item",{attrs:{label:"Test Filter"}},[s("el-autocomplete",{attrs:{placeholder:"Input feature name","fetch-suggestions":e.queryFeatureFilter},model:{value:e.featureAuto,callback:function(t){e.featureAuto=t},expression:"featureAuto"}})],1),e._v(" "),s("el-form-item",[s("el-button",{staticStyle:{background:"hsl(214, 37%, 28%)",color:"#fff"},attrs:{type:"info",icon:"el-icon-view",size:"small"},on:{click:e.onFilter}},[e._v("Filter")]),e._v(" "),s("el-button",{attrs:{type:"info",size:"small",icon:"el-icon-refresh"},on:{click:e.onClearFilter}},[e._v("Clear")])],1)],1),e._v(" "),e.tempTestCases.length>0?s("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"sTable"},[s("el-table",{attrs:{border:"",data:e.tempTestCases.slice((e.currentPage-1)*e.pageSize,e.currentPage*e.pageSize),"header-cell-style":{background:"rgba(234,238,241,.41)"},size:"small"}},[s("el-table-column",{attrs:{label:"Test Suite",prop:"suiteName",width:"150"}}),e._v(" "),s("el-table-column",{attrs:{label:"Feature",prop:"featureName",width:"150"}}),e._v(" "),s("el-table-column",{attrs:{label:"Test Name",prop:"testName"}}),e._v(" "),s("el-table-column",{attrs:{label:"Creator",prop:"creator",width:"150",align:"center"}}),e._v(" "),s("el-table-column",{attrs:{label:"Action",prop:"testName",width:"280",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{staticStyle:{background:"hsl(214, 37%, 28%)",color:"#fff"},attrs:{type:"info",size:"mini",icon:"el-icon-view"},on:{click:function(s){e.onView(t.row,t.$index)}}},[e._v("View Details")]),e._v(" "),s("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-remove-outline"},on:{click:function(s){e.onDelete(t.row,t.$index)}}},[e._v("Delete")])]}}])})],1),e._v(" "),s("br"),e._v(" "),s("el-pagination",{attrs:{background:"",align:"center","current-page":e.currentPage,"page-sizes":[1,20],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.tempTestCases.length},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1):e._e()],1)},[],!1,null,null,null);m.options.__file="SearchCase.vue";var h,v=m.exports,p=s("/umX"),f=s.n(p),g=s("EPZ6"),b=s.n(g),y=s("nU0u"),_={name:"APITestCaseTable",data:function(){return{loading:!1,id:"",origSuiteName:"",isNew:!0,suiteName:"",creator:"",testName:"",featureName:"",caseTable:[{expression:"Given",description:""}],map:[{value:"I want to use request method Get",desc:"Action: Get"},{value:"I want to use request method Post",desc:"Action: Post"},{value:"I set request header key {headerKey} value {headerValue}",desc:"Action: Header, ActionType: SetHeader"},{value:"I set request header from data sheet - {dataName}",desc:"Action: Header, ActionType: SetHeaderFromDB"},{value:"I build url query key {queryName} value {queryValue}",desc:"Action: Query, ActionType: SetQuery"},{value:"I build url query from data sheet - {dataName}",desc:"Action: Query, ActionType: SetQueryFromDB"},{value:"I set request json body from data sheet - {dataName}",desc:"Action: Body, ActionType: Json"},{value:"I set request form body from data sheet - {dataName}",desc:"Action: Body, ActionType: Form"},{value:"I set request text body from data sheet - {dataName}",desc:"Action: Body, ActionType: Text"},{value:"I want to add path {path} in host url",desc:"Action: Path"},{value:"I should see response status code is {code}",desc:"Action: Code, ActionType: See"},{value:"I should NotSee response status code is {code}",desc:"Action: Code, ActionType: NotSee"},{value:"I should see response body jsonValue {jsonValue} by jsonPath {jsonPath}",desc:"Action: JsonPath, ActionType: See"},{value:"I should NotSee response body jsonValue {jsonValue} by jsonPath {jsonPath}",desc:"Action: JsonPath, ActionType: NotSee"},{value:"I should see response body contains text {text}",desc:"Action: Text, ActionType: See"},{value:"I should NotSee response body contains text {text}",desc:"Action: Text, ActionType: NotSee"},{value:"I save value from response body use jsonPath {jsonPath} as name {storeName}",desc:"Action: SaveValue, ActionType: SaveFromJson"},{value:"Open a new request with host {host}",desc:"Action: NewRequest"},{value:"Call api module {moduleName}",desc:"Action: Call Module"}],expressionMap:[{value:"Given"},{value:"When"},{value:"Then"},{value:"And"},{value:"But"}]}},methods:(h={totalSteps:function(){var e=this.caseTable,t=this.caseTable.length;if(1!==t)return t;for(var s in e)if(!e[s].description)return 0}},f()(h,"totalSteps",function(){var e=this.caseTable,t=this.caseTable.length;if(1!==t)return t;for(var s in e)if(!e[s].description)return 0}),f()(h,"insertUp",function(e,t){var s={expression:"",description:""};0===t?this.caseTable.splice(0,0,s):this.caseTable.splice(t,0,s)}),f()(h,"insertDown",function(e,t){var s={expression:"",description:""};b()(this.caseTable).length-1===t?this.caseTable.push(s):this.caseTable.splice(t+1,0,s)}),f()(h,"remove",function(e,t){1===this.caseTable.length&&0===t?this.$message({message:"Do not remove the last line",type:"info"}):this.caseTable.splice(t,1)}),f()(h,"querySearch",function(e,t){var s=this.map;t(e?s.filter(this.createFilter(e)):s)}),f()(h,"createFilter",function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}}),f()(h,"querySearchExpression",function(e,t){var s=this.expressionMap;t(e?s.filter(this.createFilter(e)):s)}),f()(h,"addNewCase",function(){this.onClear(),this.$emit("createNewCase"),this.isNew=!0}),f()(h,"setCaseTable",function(e){e?(this.isNew=!1,this.id=e.id,this.suiteName=e.suiteName,this.origSuiteName=e.suiteName,this.creator=e.creator,this.featureName=e.featureName,this.testName=e.testName,this.caseTable=e.newCase):this.onClear()}),f()(h,"onClear",function(){this.isNew=!0,this.suiteName="",this.origSuiteName="",this.id="",this.creator="",this.featureName="",this.testName="",this.caseTable=[{expression:"Given",description:""}]}),f()(h,"onSave",function(){var e=this,t={};this.validateField()&&(t.id=this.id,t.origSuiteName=this.origSuiteName,t.suiteName=this.suiteName,t.featureName=this.featureName,t.testName=this.testName,t.creator=this.creator,t.newTestCase=this.caseTable,this.$msgbox({title:"Update Test Case",message:"Are you sure to update test case?",showCancelButton:!0,confirmButtonText:"Confirm",cancelButtonText:"Cancel"}).then(function(){e.loading=!0,function(e){var t={id:e.id,origSuiteName:e.origSuiteName,suiteName:e.suiteName,featureName:e.featureName,testName:e.testName,creator:e.creator,newTestCase:e.newTestCase};return Object(o.a)({url:"/apitestcase/updateAPITestCaseById",method:"post",data:t})}(t).then(function(t){var s=t.data.status,a=t.data.message;if("success"===s){e.loading=!1,e.$emit("submit",e.suiteName);var i=JSON.parse(n()(t.data.id));e.id=i,e.origSuiteName=JSON.parse(n()(e.suiteName)),e.$emit("refreshTable"),e.$message({message:"Update success",type:"success"})}else-1!==a.indexOf("was not found for")?(e.loading=!1,e.$message({message:e.testName+" was not found in server. You should click the Save As Button",type:"error"})):(e.loading=!1,e.$message({message:a,type:"error"}))})}).catch(function(){e.$message({message:"Cancel update test case",type:"info"})}))}),f()(h,"createNewCase",function(){var e=this,t={};this.validateField()&&(t.suiteName=this.suiteName,t.featureName=this.featureName,t.testName=this.testName,t.creator=this.creator,t.newTestCase=this.caseTable,this.$msgbox({title:"Create New Test Case",message:"Are you sure to create a new test case?",showCancelButton:!0,confirmButtonText:"Confirm",cancelButtonText:"Cancel"}).then(function(){e.loading=!0,function(e){var t={suiteName:e.suiteName,featureName:e.featureName,testName:e.testName,creator:e.creator,newTestCase:e.newTestCase};return Object(o.a)({url:"/apitestcase/createNewAPITestCase",method:"post",data:t})}(t).then(function(t){var s=t.data.status,a=t.data.message;if("success"===s){e.loading=!1,e.isNew=!1,e.$emit("submit",e.suiteName);var i=JSON.parse(n()(t.data.id));e.id=i,e.origSuiteName=JSON.parse(n()(e.suiteName)),e.$emit("refreshTable"),e.$message({message:"Create success",type:"success"})}else e.loading=!1,e.$message({message:a,type:"error"})})}).catch(function(){e.$message({message:"Cancel create new test case",type:"info"})}))}),f()(h,"onSubmit",function(){this.createNewCase()}),f()(h,"onSaveAs",function(){this.createNewCase()}),f()(h,"validateField",function(){if(!this.suiteName)return this.$message({message:"Please input suiteName on the details table",type:"error"}),!1;if(!this.testName)return this.$message({message:"Please input testName on the details table",type:"error"}),!1;if(!this.creator)return this.$message({message:"Please input creator on the details table",type:"error"}),!1;if(!this.featureName)return this.$message({message:"Please input featureName on the details table",type:"error"}),!1;var e=this.caseTable;for(var t in e){var s=e[t].expression,a=e[t].description;if(!s)return t++,this.$message({message:"Please input expression on the details table at line "+t,type:"error"}),!1;if(!a)return t++,this.$message({message:"Please input description on the details table at line "+t,type:"error"}),!1;if(!Object(y.f)(a))return t++,this.$message({message:"Your description is not correct at line "+t,type:"error"}),!1}return!0}),h)},j=(s("g5SY"),Object(d.a)(_,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"testCaseTable"},[s("el-form",{attrs:{inline:!0}},[s("el-form-item",[s("el-button",{staticStyle:{background:"hsl(214, 37%, 28%)",color:"#fff"},attrs:{type:"info",size:"small",icon:"el-icon-circle-plus-outline"},on:{click:e.addNewCase}},[e._v("Add New Case")]),e._v(" "),s("el-tag",{staticClass:"el-icon-warning",attrs:{type:"info"}},[e._v("Note: Will clear all details you view before and then create a new one")])],1),e._v(" "),s("el-form-item",{staticStyle:{float:"right"},attrs:{label:"Total Steps"}},[s("el-tag",{attrs:{type:"info"}},[e._v(e._s(e.totalSteps()))])],1)],1),e._v(" "),s("el-form",{attrs:{inline:!0}},[s("el-form-item",{attrs:{label:"Test Suite"}},[s("el-input",{attrs:{placeholder:"Input suite name"},model:{value:e.suiteName,callback:function(t){e.suiteName=t},expression:"suiteName"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"Test Name"}},[s("el-input",{staticStyle:{width:"260px"},attrs:{placeholder:"Input test name"},model:{value:e.testName,callback:function(t){e.testName=t},expression:"testName"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"Feature Name"}},[s("el-input",{attrs:{placeholder:"Input feature name"},model:{value:e.featureName,callback:function(t){e.featureName=t},expression:"featureName"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"Creator"}},[s("el-input",{attrs:{placeholder:"Input creator name"},model:{value:e.creator,callback:function(t){e.creator=t},expression:"creator"}})],1)],1),e._v(" "),s("el-form",[s("el-form-item",[s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.caseTable,"highlight-current-row":"","header-cell-style":{background:"rgba(234,238,241,.41)"},border:"",size:"mini"}},[s("el-table-column",{attrs:{label:"Expression",prop:"expression",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-autocomplete",{attrs:{"fetch-suggestions":e.querySearchExpression},model:{value:t.row.expression,callback:function(s){e.$set(t.row,"expression",s)},expression:"scope.row.expression"}})]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"Description",prop:"description",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-autocomplete",{staticStyle:{width:"100%"},attrs:{"fetch-suggestions":e.querySearch},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.item;return[s("span",{staticStyle:{color:"#8492a6","font-size":"5px"}},[e._v(e._s(a.desc))]),e._v(" "),s("div",{staticClass:"name"},[e._v(e._s(a.value))])]}}]),model:{value:t.row.description,callback:function(s){e.$set(t.row,"description",s)},expression:"scope.row.description"}})]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"Action",align:"center",width:"240"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{attrs:{size:"mini",type:"info",icon:"el-icon-arrow-up"},on:{click:function(s){e.insertUp(t.row,t.$index)}}}),e._v(" "),s("el-button",{attrs:{size:"mini",type:"info",icon:"el-icon-arrow-down"},on:{click:function(s){e.insertDown(t.row,t.$index)}}}),e._v(" "),s("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-minus"},on:{click:function(s){e.remove(t.row,t.$index)}}})]}}])})],1)],1),e._v(" "),s("el-form-item",{staticStyle:{float:"right"}},[e.isNew?s("el-button",{staticStyle:{background:"hsl(214, 37%, 28%)",color:"#fff"},attrs:{type:"info",size:"small",icon:"el-icon-files"},on:{click:e.onSubmit}},[e._v("Submit")]):s("el-button",{staticStyle:{background:"hsl(214, 37%, 28%)",color:"#fff"},attrs:{type:"info",size:"small",icon:"el-icon-document-checked"},on:{click:e.onSave}},[e._v("Save")]),e._v(" "),e.isNew?e._e():s("el-button",{staticStyle:{background:"hsl(214, 37%, 28%)",color:"#fff"},attrs:{type:"info",size:"small",icon:"el-icon-document-copy"},on:{click:e.onSaveAs}},[e._v("Save As")]),e._v(" "),s("el-button",{attrs:{type:"info",size:"small",icon:"el-icon-refresh"},on:{click:e.onClear}},[e._v("Clear")])],1)],1)],1)},[],!1,null,null,null));j.options.__file="TestCaseTable.vue";var N={name:"APITestCase",components:{searchCase:v,testCaseTable:j.exports,actionTips:s("5VVw").a},data:function(){return{activeName:"",suiteName:"",suiteNamesTable:[],currentPage:1,pageSize:5}},created:function(){this.getExistingCasesTable()},methods:{setDetailsToTable:function(e){this.$refs.caseTable.setCaseTable(e)},clearAllCases:function(){this.$refs.sCase.onClear()},updateSearch:function(e){this.$refs.sCase.updateSearchTable(e)},handleSizeChange:function(e){this.currentPage=1,this.pageSize=e},handleCurrentChange:function(e){this.currentPage=e},getExistingCasesTable:function(){var e=this;Object(o.a)({url:"/apitestcase/getExistingAPICasesTable",method:"get"}).then(function(t){var s=t.data.status,a=t.data.message;e.suiteNamesTable="success"===s?JSON.parse(n()(a)):[]})},onRefresh:function(){this.getExistingCasesTable()}},computed:{tempApiTestCase:function(){return this.$store.getters.tempApiTestCase},origApiTestCase:function(){return this.$store.getters.origApiTestCase}}},S=(s("vs+1"),Object(d.a)(N,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container"},[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:18}},[s("el-row",[s("el-col",[s("div",{staticClass:"wrapper"},[s("searchCase",{ref:"sCase",on:{viewDetails:e.setDetailsToTable,refreshTable:e.getExistingCasesTable}})],1)])],1),e._v(" "),s("el-row",[s("el-col",[s("div",{staticClass:"wrapper"},[s("testCaseTable",{ref:"caseTable",on:{createNewCase:e.clearAllCases,submit:e.updateSearch,refreshTable:e.getExistingCasesTable}})],1)])],1)],1),e._v(" "),s("el-col",{attrs:{span:6}},[s("el-row",[s("el-col",[s("div",{staticClass:"wrapper"},[s("el-form",[s("el-form-item",[s("el-button",{attrs:{type:"info",size:"small",icon:"el-icon-tickets"}},[e._v("Existing Cases Suite")]),e._v(" "),s("el-button",{attrs:{type:"warning",size:"small",icon:"el-icon-refresh"},on:{click:e.onRefresh}},[e._v("Refresh")]),e._v(" "),s("el-table",{attrs:{size:"mini",border:"",data:e.suiteNamesTable.slice((e.currentPage-1)*e.pageSize,e.currentPage*e.pageSize),"cell-style":{background:"rgba(234,238,241,.41)"}}},[s("el-table-column",{attrs:{label:"Test Suite",prop:"suiteName"}}),e._v(" "),s("el-table-column",{attrs:{label:"Total Cases",prop:"totalCases"}})],1),e._v(" "),s("el-pagination",{attrs:{align:"center",small:"",background:"","current-page":e.currentPage,"page-size":e.pageSize,layout:"total, prev,next",total:e.suiteNamesTable.length},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1)])],1),e._v(" "),s("el-row",[s("el-col",[s("div",{staticClass:"wrapper"},[s("actionTips")],1)])],1)],1)],1)],1)},[],!1,null,null,null));S.options.__file="index.vue";t.default=S.exports},Q8Yp:function(e,t,s){var a=s("zikX");a(a.S+a.F*!s("LSzb"),"Object",{defineProperty:s("hlhf").f})},Vw13:function(e,t,s){},cDhB:function(e,t,s){},cU9i:function(e,t,s){"use strict";var a=s("kDc4");s.n(a).a},d9LT:function(e,t,s){var a={"./af":"+6xi","./af.js":"+6xi","./ar":"+W91","./ar-dz":"5jx2","./ar-dz.js":"5jx2","./ar-kw":"t73a","./ar-kw.js":"t73a","./ar-ly":"lo/q","./ar-ly.js":"lo/q","./ar-ma":"n50M","./ar-ma.js":"n50M","./ar-sa":"rqV/","./ar-sa.js":"rqV/","./ar-tn":"1EuX","./ar-tn.js":"1EuX","./ar.js":"+W91","./az":"x+2I","./az.js":"x+2I","./be":"Wij6","./be.js":"Wij6","./bg":"ElF8","./bg.js":"ElF8","./bm":"KAm4","./bm.js":"KAm4","./bn":"tPyy","./bn.js":"tPyy","./bo":"VISF","./bo.js":"VISF","./br":"WtwE","./br.js":"WtwE","./bs":"rBCO","./bs.js":"rBCO","./ca":"44HC","./ca.js":"44HC","./cs":"rvJI","./cs.js":"rvJI","./cv":"ZWbz","./cv.js":"ZWbz","./cy":"E5DT","./cy.js":"E5DT","./da":"Hs5t","./da.js":"Hs5t","./de":"XxBd","./de-at":"CcTh","./de-at.js":"CcTh","./de-ch":"iaL8","./de-ch.js":"iaL8","./de.js":"XxBd","./dv":"5mII","./dv.js":"5mII","./el":"GWtt","./el.js":"GWtt","./en-SG":"CjJ2","./en-SG.js":"CjJ2","./en-au":"lO0b","./en-au.js":"lO0b","./en-ca":"KAbr","./en-ca.js":"KAbr","./en-gb":"sN32","./en-gb.js":"sN32","./en-ie":"em4J","./en-ie.js":"em4J","./en-il":"Hw9U","./en-il.js":"Hw9U","./en-nz":"FgZP","./en-nz.js":"FgZP","./eo":"8hQ3","./eo.js":"8hQ3","./es":"fVik","./es-do":"c3uw","./es-do.js":"c3uw","./es-us":"qJRn","./es-us.js":"qJRn","./es.js":"fVik","./et":"qIgW","./et.js":"qIgW","./eu":"E1es","./eu.js":"E1es","./fa":"Ckh4","./fa.js":"Ckh4","./fi":"wrHw","./fi.js":"wrHw","./fo":"UsS5","./fo.js":"UsS5","./fr":"BOb6","./fr-ca":"atEc","./fr-ca.js":"atEc","./fr-ch":"sS/8","./fr-ch.js":"sS/8","./fr.js":"BOb6","./fy":"rRPx","./fy.js":"rRPx","./ga":"Np74","./ga.js":"Np74","./gd":"It5a","./gd.js":"It5a","./gl":"+AhC","./gl.js":"+AhC","./gom-latn":"UNVT","./gom-latn.js":"UNVT","./gu":"5noc","./gu.js":"5noc","./he":"A3zy","./he.js":"A3zy","./hi":"PVOm","./hi.js":"PVOm","./hr":"Z4sp","./hr.js":"Z4sp","./hu":"F4OY","./hu.js":"F4OY","./hy-am":"KHN6","./hy-am.js":"KHN6","./id":"3pmv","./id.js":"3pmv","./is":"aqIZ","./is.js":"aqIZ","./it":"H5Oh","./it-ch":"Lbn0","./it-ch.js":"Lbn0","./it.js":"H5Oh","./ja":"a/hR","./ja.js":"a/hR","./jv":"blXy","./jv.js":"blXy","./ka":"5l9n","./ka.js":"5l9n","./kk":"cWeS","./kk.js":"cWeS","./km":"RmhJ","./km.js":"RmhJ","./kn":"49JL","./kn.js":"49JL","./ko":"sFhI","./ko.js":"sFhI","./ku":"AX7K","./ku.js":"AX7K","./ky":"sr0c","./ky.js":"sr0c","./lb":"5Qxw","./lb.js":"5Qxw","./lo":"yhSl","./lo.js":"yhSl","./lt":"PoQ0","./lt.js":"PoQ0","./lv":"zh3s","./lv.js":"zh3s","./me":"nTjT","./me.js":"nTjT","./mi":"Pi6G","./mi.js":"Pi6G","./mk":"1TLg","./mk.js":"1TLg","./ml":"22En","./ml.js":"22En","./mn":"dJOO","./mn.js":"dJOO","./mr":"Utgi","./mr.js":"Utgi","./ms":"tVnS","./ms-my":"dGL7","./ms-my.js":"dGL7","./ms.js":"tVnS","./mt":"wFWj","./mt.js":"wFWj","./my":"SeDP","./my.js":"SeDP","./nb":"6xxv","./nb.js":"6xxv","./ne":"Csux","./ne.js":"Csux","./nl":"dJfi","./nl-be":"MRTp","./nl-be.js":"MRTp","./nl.js":"dJfi","./nn":"mpz7","./nn.js":"mpz7","./pa-in":"xZWs","./pa-in.js":"xZWs","./pl":"gByo","./pl.js":"gByo","./pt":"WwjB","./pt-br":"FV8/","./pt-br.js":"FV8/","./pt.js":"WwjB","./ro":"Bfzf","./ro.js":"Bfzf","./ru":"kLOS","./ru.js":"kLOS","./sd":"mb+L","./sd.js":"mb+L","./se":"INbG","./se.js":"INbG","./si":"fAt1","./si.js":"fAt1","./sk":"kPwN","./sk.js":"kPwN","./sl":"hxsc","./sl.js":"hxsc","./sq":"sEVj","./sq.js":"sEVj","./sr":"rIH4","./sr-cyrl":"otCO","./sr-cyrl.js":"otCO","./sr.js":"rIH4","./ss":"sJOY","./ss.js":"sJOY","./sv":"EuXU","./sv.js":"EuXU","./sw":"OKBF","./sw.js":"OKBF","./ta":"pGL5","./ta.js":"pGL5","./te":"GMsB","./te.js":"GMsB","./tet":"DBFB","./tet.js":"DBFB","./tg":"1wcQ","./tg.js":"1wcQ","./th":"iD8K","./th.js":"iD8K","./tl-ph":"bMCK","./tl-ph.js":"bMCK","./tlh":"q1OC","./tlh.js":"q1OC","./tr":"5SN/","./tr.js":"5SN/","./tzl":"sZJe","./tzl.js":"sZJe","./tzm":"VgS6","./tzm-latn":"n5U2","./tzm-latn.js":"n5U2","./tzm.js":"VgS6","./ug-cn":"n0/P","./ug-cn.js":"n0/P","./uk":"i9YG","./uk.js":"i9YG","./ur":"mngK","./ur.js":"mngK","./uz":"TUw/","./uz-latn":"2nP5","./uz-latn.js":"2nP5","./uz.js":"TUw/","./vi":"t2ap","./vi.js":"t2ap","./x-pseudo":"KmmR","./x-pseudo.js":"KmmR","./yo":"/S7I","./yo.js":"/S7I","./zh-cn":"NdDt","./zh-cn.js":"NdDt","./zh-hk":"e0XV","./zh-hk.js":"e0XV","./zh-tw":"+mZi","./zh-tw.js":"+mZi"};function n(e){var t=i(e);return s(t)}function i(e){var t=a[e];if(!(t+1)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t}n.keys=function(){return Object.keys(a)},n.resolve=i,e.exports=n,n.id="d9LT"},dixQ:function(e,t,s){s("Q8Yp");var a=s("12G+").Object;e.exports=function(e,t,s){return a.defineProperty(e,t,s)}},g5SY:function(e,t,s){"use strict";var a=s("oNV0");s.n(a).a},kDc4:function(e,t,s){},kUvm:function(e,t,s){"use strict";s.d(t,"a",function(){return r});var a=s("rerW"),n=s.n(a),i={choosesFilter:function(e,t){var s=[];if(0===t.length)s=e;else if(0===e.length)s=[];else{var a=function(t){s=s.concat(e.filter(function(e){return e[t.type]===t.value}))},i=!0,r=!1,o=void 0;try{for(var l,u=n()(t);!(i=(l=u.next()).done);i=!0){a(l.value)}}catch(e){r=!0,o=e}finally{try{!i&&u.return&&u.return()}finally{if(r)throw o}}}return s}};function r(e,t){for(var s in t)e=i.choosesFilter(e,t[s]);return e}},nU0u:function(e,t,s){"use strict";s.d(t,"a",function(){return n}),s.d(t,"b",function(){return i}),s.d(t,"c",function(){return r}),s.d(t,"d",function(){return o}),s.d(t,"e",function(){return l}),s.d(t,"f",function(){return u});var a=s("a/LZ");function n(e){var t=[];for(var s in e){var a=[],n=e[s].data,i=e[s].testName,r=e[s].creator,o=e[s].env,l=e[s].id;for(var u in n)a.push({name:u,value:n[u]});t.push({testName:i,list:a,creator:r,edit:!1,env:o,id:l})}return t}function i(e){var t=e.data,s=[];for(var a in t)s.push({name:a,value:t[a]});return e.list=s,delete e.data,e}function r(e,t){var s=a(e,"YYY-MM-DD hh:mm:ss"),n=a(t,"YYY-MM-DD hh:mm:ss").diff(s,"milliseconds"),i=a.duration(n);return i.minutes()+" minutes "+i.seconds()+" seconds"}function o(e,t){var s=a(e,"YYY-MM-DD hh:mm:ss"),n=a(t,"YYY-MM-DD hh:mm:ss").diff(s,"milliseconds"),i=a.duration(n);return i.hours()+" hs "+i.minutes()+" mins "+i.seconds()+" ss"}function l(e){return!!new RegExp(/(^Check object ([^"]*) if exist in ([^"]*)$)|(^Wait ([^"]*) second until ([^"]*) exist in ([^"]*)$)|(^Open ([^"]*) and ([^"]*) to homepage$)|(I ([^"]*) on ([^"]\S*) in ([^"]*)$)|(^Object ([^"]*) should ([^"]*) with ([^"]*) in ([^"]*)$)|(^I ([^"]*) on ([^"]*) with ([^"]*) in ([^"]*)$)|(^I should ([^"]*) the object ([^"]*) in ([^"]*)$)|(^I store the object ([^"]*) text as ([^"]*) in ([^"]*)$)|(^End if$)|(^Close the browser$)|(^Mouseover on ([^"]*) in ([^"]*)$)|(^Switch to new window$)|(^Switch to parent window$)|(^Switch to new iframe ([^"]*) in ([^"]*)$)|(^Switch to default page$)|Call module ([^"]\S*) in ([^"]\S*)/).test(e)}function u(e){return!!new RegExp(/(^I want to use request method ([^"]\S*)$)|(^I set request header key ([^"]\S*) value ([^"]\S*)$)|(I set request header from data sheet - ([^"]\S*)$)|(^I build url query key ([^"]\S*) value ([^"]\S*)$)|(^I build url query from data sheet - ([^"]\S*)$)|(^I set request ([^"]\S*) body from data sheet - ([^"]\S*)$)|(^I want to add path ([^"]\S*) in host url$)|(^I should ([^"]\S*) response status code is ([^"]\S*)$)|(^I should ([^"]\S*) response body jsonValue ([^"]\S*) by jsonPath ([^"]\S*)$)|(^I should ([^"]\S*) response body contains text ([^"]\S*)$)|(^I save value from response body use jsonPath ([^"]\S*) as name ([^"]\S*)$)|(^Open a new request with host ([^"]\S*)$)|(^Call api module ([^"]\S*)$)/).test(e)}},oNV0:function(e,t,s){},"vs+1":function(e,t,s){"use strict";var a=s("Vw13");s.n(a).a},wwKv:function(e,t,s){"use strict";var a=s("cDhB");s.n(a).a}}]);