import gps
import time
session = gps.gps("127.0.0.1", "2947")
session.stream(gps.WATCH_ENABLE | gps.WATCH_NEWSTYLE)

while True:
    try:
        time.sleep(0.5)
        raw_data = session.next()
        if raw_data['class'] == 'TPV':
                if hasattr(raw_data, 'speed'):
                        print str(raw_data.speed)
                        quit()

    except KeyError:
                pass
    except KeyboardInterrupt:
                quit()
    except StopIteration:
                session = None
                print "No incoming data from the GPS module"
