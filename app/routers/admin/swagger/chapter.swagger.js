/**
 * @swagger
 * components:
 *  schemas:
 *      AddChapter:
 *          type: object
 *          required:
 *              -   id
 *              -   title
 *          properties:
 *              id:
 *                  type: string
 *              title:
 *                  type: string
 *              text:
 *                  type: string
 */

/**
 * @swagger
 *  definitions:
 *      chaptersDefinition:
 *          type: object
 *          properties:
 *              statusCode:                 
 *                  type: integer
 *                  example: 20X
 *              data:
 *                  type: object
 *                  properties:
 *                      course:
 *                          type: object
 *                          properties:
 *                             _id:
 *                                  type: string
 *                             title:
 *                                  type: string
 *                             chapters:
 *                                  type: array
 *                                  items:
 *                                     type: object
 *                                  examples: [{}]
 *                                  
 */

/**
 * @swagger
 *  /admin/chapters/add:
 *      put:
 *          tags: [Chapter(AdminPanel)]
 *          summary: add a new chapter
 *          requestBody:
 *              required: true
 *              content: 
 *                      application/x-www-form-urlencoded:
 *                          schema:
 *                             $ref: '#/components/schemas/AddChapter'  
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/AddChapter'  
 *          responses:
 *                  200:
 *                    description : success
 *          content:
 *                  application/json:
 *                     schema:
 *                        $ref: '#/definitions/publicDefinition'  
 * 
 */

/**
 * @swagger
 *  /admin/chapters/list/{id}:
 *      get:
 *          tags: [Chapter(AdminPanel)]
 *          summary: get chapter by id
 *          parameters:
 *             -    in: path
 *                  name: id
 *                  type: string
 *                  required: true
 *          responses:
 *                  200:
 *                    description : success
 *          content:
 *                  application/json:
 *                     schema:
 *                        $ref: '#/definitions/chaptersDefinition'  
 * 
 */