<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h1><c:out value="${language.name}"/></h1>
	<p>Creator: <c:out value="${language.creator}"/></p>
	<p>Version: <c:out value="${language.version}"/></p>
	<a href="/languages/edit/${language.id}">Edit</a>
  	<form:form action="/languages/${language.id}" method="POST">
  		<input type="hidden" name="_method" value="delete">
  		<input class="btn btn-link" type="submit" value="Delete"/>
  	</form:form>
</body>
</html>