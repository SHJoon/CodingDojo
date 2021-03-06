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
	<div id="container">
		<a href="/dashboard">dashboard</a>
		<table>
			<tr>
				<td>Title</td>
				<td><c:out value="${song.title}" /></td>
			</tr>
			<tr>
				<td>Artist</td>
				<td><c:out value="${song.artist}" /></td>
			</tr>
			<tr>
				<td>Rating</td>
				<td><c:out value="${song.rating}" /></td>
			</tr>
			<tr>
				<td>
					<form:form action="/songs/${song.id}" method="POST">
						<input type="hidden" name="_method" value="delete">
						<input class="btn btn-link" type="submit" value="delete"/>
					</form:form>
				</td>
				<td></td>
			</tr>
		</table>
	</div>
</body>
</html>