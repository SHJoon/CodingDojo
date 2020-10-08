<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Lookify!</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
	<div id="container">
		<div id="header">
			<a href="/songs/new">Add New</a>
			<a href="/search/topTen">Top Songs</a>
			<form method=POST action="/search">
				<input type="text" name="search">
				<input type="submit" value="Search Artists">
			</form>
		</div>
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>rating</th>
					<th>actions</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach items="${songs}" var="song">
				<tr>
					<td><a href="/songs/${song.id}"><c:out value="${song.title}" /></a></td>
					<td><c:out value="${song.rating}" /></td>
					<td>
						<form:form action="/songs/${song.id}" method="POST">
							<input type="hidden" name="_method" value="delete">
							<input class="btn btn-link" type="submit" value="delete"/>
						</form:form>
					</td>
				</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>
</body>
</html>