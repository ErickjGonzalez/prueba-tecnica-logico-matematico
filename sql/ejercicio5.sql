-- Consulta identifique los libros que la alumna Sonia tiene prestados, que no ha devuelto y cuyo préstamo está vencido al día 30/07/2021.

SELECT l.Nombre, a.Nombres, a.Apellidos, p.Fecha_prestamo
FROM PRESTAMO p
INNER JOIN ALUMNO a ON p.Id_alumno = a.id
INNER JOIN LIBRO l ON p.Id_libro = l.Id
WHERE a.Nombres = 'Sonia'
AND p.Entregado = false
AND DATE_ADD(p.Fecha_prestamo, INTERVAL l.Dias_limite_prestamo DAY) < '2021-07-30';