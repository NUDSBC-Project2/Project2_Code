DROP TABLE IF EXISTS teams;

CREATE TABLE teams (
	team_id SMALLSERIAL,
	team_name VARCHAR,
    y1999 INT,
    y2000 INT,
    y2001 INT,
    y2002 INT,
    y2003 INT,
    y2004 INT,
    y2005 INT,
    y2006 INT,
    y2007 INT,
    y2008 INT,
    y2009 INT,
    y2010 INT,
    y2011 INT,
    y2012 INT,
    y2013 INT,
    y2014 INT, 
    y2015 INT,
    y2016 INT,
    y2017 INT,
    y2018 INT,
    y2019 INT
);

COPY teams(team_name,y2019,y2018,y2017,y2016,y2015,y2014,y2013,y2012,y2011,y2010,y2009,y2008,y2007,
		  y2006,y2005,y2004,y2003,y2002,y2001) 
FROM 'C:\Users\Owner\BootCampData\Project2_Code\Output\teamAttendancePerYr.csv' DELIMITER ',' CSV HEADER;

SELECT * FROM teams;
