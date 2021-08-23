import gps
import time
session = gps.gps("127.0.0.1", "2947")
session.stream(gps.WATCH_ENABLE | gps.WATCH_NEWSTYLE)

while True:
    try:
        time.sleep(0.5)
        raw_data = session.next()
        if raw_data['class'] == 'TPV':
                if hasattr(raw_data, 'lat'):
                        print(str(raw_data.lat))
                        quit()

    except KeyError:
                pass
    except KeyboardInterrupt:
                quit()