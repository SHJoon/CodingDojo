<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page isErrorPage="true" %>   
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Languages</title>
</head>
<body>
	<div id="container">
		<table>
			<tr>
				<th>Name</th>
				<th>Creator</th>
				<th>Version</th>
				<th>Action</th>
			</tr>
			<c:forEach items="${languages}" var="lang">
			<tr>
				<td><a href="/languages/${lang.id}"><c:out value="${lang.name}"/></a></td>
				<td><c:out value="${lang.creator}"/></td>
				<td><c:out value="${lang.version}"/></td>
				<td>
					<form:form action="/languages/${lang.id}" method="POST">
				  		<input type="hidden" name="_method" value="delete">
				  		<input class="btn btn-link" type="submit" value="Delete"/>
				  	</form:form>
					<a href="/languages/edit/${lang.id}">edit</a>
				</td>
			</tr>
			</c:forEach>
		</table>
		<form:form action="/languages" method="POST" modelAttribute="language">
			<div>
				<form:label path="name">Name</form:label>
				<form:errors path="name"/>
				<form:input path="name"/>
			</div>
			<div>
				<form:label path="creator">Creator</form:label>
				<form:errors path="creator"/>
				<form:input path="creator"/>
			</div>
			<div>
				<form:label path="version">Version</form:label>
				<form:errors path="version"/>
				<form:input path="version"/>
			</div>
			<input type="submit" value="Submit">
		</form:form>
	</div>
</body>
</html>