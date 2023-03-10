# Determine reindeer lichen coverage with image segmentation and machine learning

Project repository for project "Determine reindeer lichen coverage with image segmentation and machine learning" which have been conducted in the course in Scientific Computing (1TD316).

Every folder contains its own README where more details about that specific part of the project is clearly stated.

## Image labeling
To start the data labeling system, do one of the following:

1. Start the entire system with [start_system.sh](https://github.com/DanielHjelm/ReindeerLichens/blob/main/start_system.sh):
    ```bash
    $ ./start_system.sh
    ```
2. Start each component of the system individually:
    ```bash
    cd images_api && npm ci && npm run dev &\

    cd web_server && npm ci && npm run dev & \

    cd machine_learning && python3 prediction_server.py 

    cd region_growing && go run main.go 

    ```
## Database

Install and start a MongoDB instance (See: https://www.mongodb.com/docs/manual/installation/).

Use one of the following option for the database:

- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/lp/try4?utm_content=rlsavisitor&utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core_retarget-brand_gic-null_emea-all_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=14412646455&adgroup=131761126492&gclid=CjwKCAiAk--dBhABEiwAchIwkdINWlBFj1y93_XUqRF2twYta-RzBNqCtuGaN3Y9FtR8O7N-y5vgWxoCK40QAvD_BwE)

- Run database locally and use a port-forwarding solution (See for example [ngrok](https://ngrok.com/docs/getting-started))

### Upload and download images to/from database

Code for uploading and downloading images from the database is in the files [upload_to_db.py](https://github.com/DanielHjelm/ReindeerLichens/blob/main/upload_to_db.py) and [download_from_db.py](https://github.com/DanielHjelm/ReindeerLichens/blob/main/download_from_db.py).

