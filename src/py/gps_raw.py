import gps 
session = gps.gps("127.0.0.1", "2947") 
session.stream(gps.WATCH_ENABLE | gps.WATCH_NEWSTYLE)
 
while True:
	try:
		sleep()
		report = session.next()
		print report
		quit()
	except KeyError:
		pass
	except KeyboardInterrupt:
		quit()
	except StopIteration:
		session = None
		print "GPSD has terminated"
