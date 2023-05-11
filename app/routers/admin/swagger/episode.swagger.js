/**
 * @swagger
 * components:
 *  schemas:
 *      AddEpisode:
 *          type: object
 *          required:
 *              -   courseID
 *              -   chapterID
 *              -   title
 *              -   text
 *              -   video
 *              -   type
 *          properties:
 *              courseID:
 *                  type: string
 *              chapterID:
 *                  type: string
 *              title:
 *                  type: string
 *              text:
 *                  type: string
 *              video:
 *                  type: string
 *                  format: binary
 *              type:
 *                  type: string
  *                  enum:
 *                     - lock
 *                     - unlock
 *      EditEpisode:
 *          type: object
 *          properties:
 *              title:
 *                  type: string
 *              text:
 *                  type: string

 */





/**
 * @swagger
 *  /admin/episodes/add:
 *      post:
 *          tags: [Episode(AdminPanel)]
 *          summary: add a new episode
 *          requestBody:
 *              required: true
 *              content: 
 *                      multipart/form-data:
 *                          schema:
 *                             $ref: '#/components/schemas/AddEpisode'  
 *          responses:
 *                  200:
 *                    description : success
 *          content:
 *                  application/json:
 *                     schema:
 *                        $ref: '#/definitions/publicDefinition'  
 * 
 */