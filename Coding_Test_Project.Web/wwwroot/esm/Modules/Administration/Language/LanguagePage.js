import{a as d,b as m,c as e,d as i}from"../../../_chunks/chunk-YJXLW3ZO.js";import{c as o,e as a,f as n,h as s}from"../../../_chunks/chunk-CFICWFWM.js";var u=a(s(),1);var c=a(s(),1);var t=class extends c.EntityDialog{constructor(){super(...arguments);this.form=new m(this.idPrefix)}getFormKey(){return m.formKey}getIdProperty(){return e.idProperty}getLocalTextPrefix(){return e.localTextPrefix}getNameProperty(){return e.nameProperty}getService(){return i.baseUrl}};o(t,"LanguageDialog"),t=n([c.Decorators.registerClass("Coding_Test_Project.Administration.LanguageDialog")],t);var p=a(s(),1);var r=class extends p.EntityGrid{useAsync(){return!0}getColumnsKey(){return d.columnsKey}getDialogType(){return t}getIdProperty(){return e.idProperty}getLocalTextPrefix(){return e.localTextPrefix}getService(){return i.baseUrl}afterInit(){super.afterInit()}getDefaultSortBy(){return[e.Fields.LanguageName]}};o(r,"LanguageGrid"),r=n([p.Decorators.registerClass("Coding_Test_Project.Administration.LanguageGrid")],r);$(function(){(0,u.initFullHeightGridPage)(new r($("#GridDiv")).element)});
//# sourceMappingURL=LanguagePage.js.map