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
 *  /admin/chapter/add:
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