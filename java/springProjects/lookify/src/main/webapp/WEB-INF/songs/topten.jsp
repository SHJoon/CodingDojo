<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<div id="container">
		<div id="header">
			<p>Top Ten Songs</p>
			<a href="/dashboard">Dashboard</a>
		</div>
		
		<table>
			<c:forEach items="${songs}" var="song">
				<p>
					<c:out value="${song.rating}"/> - <a href="/songs/${song.id}"><c:out value="${song.title}"/></a> - <c:out value="${song.artist}"/>
				</p>
			</c:forEach>
		</table>
	</div>
</body>
</html>