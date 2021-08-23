import gps
import time
session = gps.gps("127.0.0.1", "2947")
session.stream(gps.WATCH_ENABLE | gps.WATCH_NEWSTYLE)


def main():
    while True: 
        raw_data = session.next()
        if raw_data["class"] == "TPV":
            if hasattr(raw_data, 'lat') and hasattr(raw_data, 'lon') and hasattr(raw_data, 'speed'):
                print raw_data
                quit()



if __name__ == "__main__":
    main()
