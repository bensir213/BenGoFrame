(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-dff2"],{"+vVh":function(e,t,s){"use strict";var n=s("BFGP");s.n(n).a},BFGP:function(e,t,s){},KrEx:function(e,t,s){var n=s("rhgp"),o=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},RGjw:function(e,t,s){"use strict";s.r(t);var n=s("omC7"),o=s.n(n),i=s("fe1z"),a={name:"UserManage",computed:{token:function(){return this.$store.getters.token}},data:function(){return{dialogFormVisible:!1,newName:"",newPassword:"",newIntroduction:"",usersTable:[],origUsersTable:[]}},methods:{onSubmit:function(){var e=this,t=this.token,s=this.newName,n=this.newPassword,o=this.newIntroduction;s?n?o?Object(i.a)(t,s,n,o).then(function(t){var s=t.data.status,n=t.data.message;"success"===s?(e.dialogFormVisible=!e.dialogFormVisible,e.clearAllDialog(),e.getAllUsers(),e.$message({message:"Create user success",type:"success"})):e.$message({message:n,type:"error"})}):this.$message({message:"Please input new introduction",type:"error"}):this.$message({message:"Please input new password",type:"error"}):this.$message({message:"Please input new name",type:"error"})},onClose:function(){this.clearAllDialog(),this.dialogFormVisible=!this.dialogFormVisible},addUser:function(){this.dialogFormVisible=!this.dialogFormVisible},getAllUsers:function(){var e=this,t=this.token;Object(i.c)(t).then(function(t){e.usersTable=JSON.parse(o()(t.data.info)),e.origUsersTable=JSON.parse(o()(t.data.info))})},onRefresh:function(){this.getAllUsers()},onEdit:function(e){e.edit=!e.edit},onSave:function(e,t){var s=this,n=e.name,a=e.password,r=e.duty,l=this.token;r.introduction?a?this.$msgbox({title:"Update User Info",message:"Are you sure to update user: "+n,showCancelButton:!0,confirmButtonText:"Confirm",cancelButtonText:"Cancel"}).then(function(){Object(i.f)(l,n,a,r).then(function(t){var n=t.data.status,a=t.data.message;"success"===n?(Object(i.c)(l).then(function(e){s.origUsersTable=JSON.parse(o()(e.data.info))}),s.$message({message:"Update success",type:"success"}),e.edit=!e.edit):"Nothing was updated"===a?(e.edit=!e.edit,s.$message({message:a,type:"info"})):s.$message({message:a,type:"error"})})}).catch(function(){e.edit=!e.edit,s.$message({message:"Cancel update user info",type:"info"})}):this.$message({message:"Please input your password",type:"error"}):this.$message({message:"Please input your introduction",type:"error"})},onCancel:function(e,t){this.rollBack(e,t),e.edit=!e.edit},onDelete:function(e,t){var s=this,n=e.name,o=this.token;this.$msgbox({title:"Delete User",message:"Are you sure to delete user: "+n,showCancelButton:!0,confirmButtonText:"Confirm",cancelButtonText:"Cancel"}).then(function(){Object(i.e)(o,n).then(function(e){var n=e.data.status,o=e.data.message;"success"===n?(s.usersTable.splice(t,1),s.origUsersTable.splice(t,1),s.$message({message:o,type:"success"})):s.$message({message:o,type:"error"})})}).catch(function(){s.$message({message:"Cancel delete user",type:"info"})})},rollBack:function(e,t){e.name;var s=this.origUsersTable[t];e.duty.introduction=JSON.parse(o()(s.duty.introduction)),e.password=JSON.parse(o()(s.password))},clearAllDialog:function(){this.newName="",this.newPassword="",this.newIntroduction=""}},created:function(){this.getAllUsers()}},r=(s("+vVh"),s("ZrdR")),l=Object(r.a)(a,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container"},[s("br"),e._v(" "),s("br"),e._v(" "),s("br"),e._v(" "),s("el-row",{attrs:{type:"flex",justify:"center",gutter:20}},[s("el-col",{attrs:{span:12}},[s("div",{staticClass:"wrapper"},[s("el-form",{attrs:{inline:!0}},[s("el-form-item",[s("el-button",{attrs:{type:"info",size:"small",icon:"el-icon-user"}},[e._v("User Info")]),e._v(" "),s("el-button",{attrs:{type:"warning",size:"small",icon:"el-icon-refresh"},on:{click:e.onRefresh}},[e._v("Get User Info")]),e._v(" "),s("el-button",{staticStyle:{background:"hsl(214, 37%, 28%)",color:"#fff"},attrs:{type:"info",size:"small",icon:"el-icon-circle-plus-outline"},on:{click:e.addUser}},[e._v("Create User")]),e._v(" "),s("el-tag",{staticClass:"el-icon-warning",attrs:{type:"info"}},[e._v("Note: You can only modify password or introduction")])],1)],1),e._v(" "),s("el-table",{attrs:{data:e.usersTable,"header-cell-style":{background:"rgba(234,238,241,.41)"},border:""}},[s("el-table-column",{attrs:{label:"User Name",prop:"name"}}),e._v(" "),s("el-table-column",{attrs:{label:"User Password",prop:"password"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.edit?s("el-input",{attrs:{placeholder:"Input password",size:"small"},model:{value:t.row.password,callback:function(s){e.$set(t.row,"password",s)},expression:"scope.row.password"}}):s("span",[e._v(e._s(t.row.password))])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"Introduction",prop:"duty.introduction"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.edit?s("el-input",{attrs:{placeholder:"Input introduction",size:"small"},model:{value:t.row.duty.introduction,callback:function(s){e.$set(t.row.duty,"introduction",s)},expression:"scope.row.duty.introduction"}}):s("span",[e._v(e._s(t.row.duty.introduction))])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"Actions",align:"center",width:"230"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.edit?s("el-button",{attrs:{size:"mini",type:"info",icon:"el-icon-files"},on:{click:function(s){e.onSave(t.row,t.$index)}}},[e._v("Save")]):s("el-button",{attrs:{size:"mini",type:"info",icon:"el-icon-edit"},on:{click:function(s){e.onEdit(t.row)}}},[e._v("Edit")]),e._v(" "),t.row.edit?s("el-button",{attrs:{size:"mini",type:"info",icon:"el-icon-circle-close"},on:{click:function(s){e.onCancel(t.row,t.$index)}}},[e._v("Cancel")]):e._e(),e._v(" "),t.row.edit?e._e():s("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-remove-outline"},on:{click:function(s){e.onDelete(t.row,t.$index)}}},[e._v("Delete")])]}}])})],1),e._v(" "),s("el-dialog",{attrs:{title:"Create User",visible:e.dialogFormVisible,"close-on-click-modal":!1,width:"50%"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[s("el-form",{attrs:{inline:!0}},[s("el-form-item",{attrs:{label:"User Name"}},[s("el-input",{attrs:{placeholder:"Input user name"},model:{value:e.newName,callback:function(t){e.newName=t},expression:"newName"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"Password"}},[s("el-input",{attrs:{placeholder:"Input password"},model:{value:e.newPassword,callback:function(t){e.newPassword=t},expression:"newPassword"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"Introduction"}},[s("el-input",{attrs:{placeholder:"Input introduction"},model:{value:e.newIntroduction,callback:function(t){e.newIntroduction=t},expression:"newIntroduction"}})],1)],1),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{staticStyle:{background:"hsl(214, 37%, 28%)",color:"#fff"},on:{click:e.onSubmit}},[e._v("Submit")]),e._v(" "),s("el-button",{attrs:{type:"info"},on:{click:e.onClose}},[e._v("Cancel")])],1)],1),e._v(" "),s("br")],1)])],1)],1)},[],!1,null,null,null);l.options.__file="index.vue";t.default=l.exports},omC7:function(e,t,s){e.exports={default:s("KrEx"),__esModule:!0}}}]);