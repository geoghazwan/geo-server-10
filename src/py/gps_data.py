#!/usr/bin/python
# -*- coding: utf-8 -*-

import gps
import time
session = gps.gps('127.0.0.1', '2947')
session.stream(gps.WATCH_ENABLE | gps.WATCH_NEWSTYLE)

time.sleep(0.5)
raw_data = session.next()
return raw_data
#!/usr/bin/python
# -*- coding: utf-8 -*-

import gps
import time
session = gps.gps('127.0.0.1', '2947')
session.stream(gps.WATCH_ENABLE | gps.WATCH_NEWSTYLE)

time.sleep(0.5)
raw_data = session.next()
return raw_data
