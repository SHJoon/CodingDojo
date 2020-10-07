<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page isErrorPage="true" %>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%> 

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<form:form action="/languages/${language.id}" method="post" modelAttribute="language">
		<input type="hidden" name="_method" value="put">
		<div>
			<p><form:label path="name">Name</form:label></p>
			<p><form:errors path="name"/></p>
			<p><form:input path="name"/></p>
		</div>
		<div>
			<p><form:label path="creator">Creator</form:label></p>
			<p><form:errors path="creator"/></p>
			<p><form:input path="creator"/></p>
		</div>
		<div>
			<p><form:label path="version">Version</form:label></p>
			<p><form:errors path="version"/></p>
			<p><form:input path="version"/></p>
		</div>
		<input type="submit" value="Submit">
	</form:form>
</body>
</html>